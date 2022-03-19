import { Link } from "react-router-dom";
import CategorySidebar from "../components/CategorySidebar";
import { products } from "../data/Products";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SingleProduct from "../components/SingleProduct";
import AppBar from "../components/AppBar";
import HomeBottomNav from "../components/HomeBottomNav";

const Search = () => {
  const [filteredProductsSearch, setFilterProductsSearch] = useState(products);
  const search = useLocation().state;
  useEffect(() => {
    if (search) {
      const filteredItems = products.filter(
        (product) =>
          product.title.includes(search) ||
          product.category
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())
      );
      setFilterProductsSearch(filteredItems);
    } else {
      setFilterProductsSearch(products);
    }
  }, [search]);
  return (
    <>
      <AppBar title="جستجو" />
      <div className="2xl:container 2xl:max-w-screen-2xl 2xl:mx-auto grid grid-cols-12 md:gap-8 md:pb-8">
        <CategorySidebar />
        <div className="col-span-12 xl:col-span-10 md:col-span-9 md:ml-4 md:mt-4">
          <div className="hidden md:flex px-4 items-center gap-x-2 bg-white">
            <div className="p-4 flex items-center gap-x-2 rounded-md">
              <Link to="/">
                <span className="text-sm text-orange-500">خانه</span>
              </Link>
              <span>
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 7 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.944605 4.20001L0.950718 4.19373L0.956607 4.18725C1.32573 3.78078 2.02428 3.21446 2.78795 2.68511C3.55136 2.15595 4.3254 1.70144 4.83012 1.49807L4.83016 1.49817L4.83934 1.49425C4.9071 1.46536 5.04003 1.41502 5.18119 1.3714C5.32581 1.32672 5.43223 1.304 5.48132 1.2999C5.61125 1.30172 5.73419 1.33117 5.85588 1.39173C6.003 1.4793 6.12099 1.61405 6.18635 1.76875C6.20654 1.82465 6.24286 1.96706 6.2795 2.13162C6.29674 2.20908 6.31191 2.28146 6.32269 2.33467C6.32679 2.3549 6.33016 2.37191 6.33272 2.38505L6.33888 2.41907C6.43995 2.97739 6.5 3.92131 6.5 4.9942C6.5 5.9933 6.44261 6.893 6.36023 7.47421C6.35734 7.48646 6.3548 7.4984 6.35289 7.50753C6.34799 7.53103 6.34185 7.56245 6.33547 7.59507L6.33512 7.59688L6.33508 7.59707C6.3215 7.66652 6.30404 7.75588 6.28346 7.85134C6.26272 7.94755 6.23997 8.04456 6.2166 8.12825C6.20496 8.16994 6.19405 8.20513 6.18419 8.23328C6.17932 8.24718 6.17515 8.25811 6.17176 8.26634L6.16778 8.27562C6.16701 8.27731 6.16655 8.27826 6.16641 8.27855C6.1664 8.27855 6.1664 8.27856 6.1664 8.27857C6.02897 8.54694 5.76907 8.69981 5.50794 8.69981H5.48063C5.45851 8.69813 5.40766 8.69019 5.32578 8.66857C5.24294 8.64671 5.15072 8.61694 5.06198 8.58535C5.02814 8.5733 4.9956 8.56128 4.9652 8.54971L4.73986 8.4536C4.25814 8.24812 3.50692 7.8079 2.7622 7.29375C2.01557 6.77828 1.32584 6.2231 0.948006 5.80297L0.940361 5.79447L0.932428 5.78642L0.932424 5.78641L0.932391 5.78638L0.932366 5.78635L0.932336 5.78632L0.932191 5.78617L0.930758 5.78472L0.924312 5.77811L0.89904 5.75191C0.87732 5.72922 0.847428 5.69759 0.81482 5.66193C0.743684 5.58413 0.680493 5.50967 0.650976 5.46665L0.645463 5.45861L0.639642 5.4508C0.550658 5.33135 0.5 5.17339 0.5 5.0047C0.5 4.81956 0.55263 4.65736 0.644446 4.52729C0.665497 4.50433 0.691697 4.47506 0.717762 4.44593C0.731054 4.43107 0.744311 4.41626 0.756832 4.40234C0.815459 4.33717 0.882201 4.26406 0.944605 4.20001Z"
                    stroke="#222F5D"
                  />
                </svg>
              </span>
              <span className="text-sm text-orange-500">جستجو</span>
            </div>
          </div>

          {filteredProductsSearch.length ? (
            <div className="md:col-span-9 xl:col-span-10 col-span-12 md:px-0 px-3 md:ml-4 mt-5">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto grid-flow-row mb-20 md:mb-0">
                {filteredProductsSearch.map((product, index) => {
                  return <SingleProduct key={index} product={product} />;
                })}
              </div>
            </div>
          ) : (
            <h2 className="p-4 text-2xl md:mb-96">محصول مورد نظر یافت نشد</h2>
          )}
        </div>
      </div>
      <HomeBottomNav />
    </>
  );
};

export default Search;
