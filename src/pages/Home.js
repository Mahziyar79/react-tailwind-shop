import React, { useState } from "react";
import AppBar from "../components/AppBar";
import HeadFilter from "../components/HeadFilter";
import HomeBottomNav from "../components/HomeBottomNav";
import MobileHeadFilter from "../components/MobileHeadFilter";
import ShopSidebar from "../components/ShopSidebar";
import ProductList from "../components/ProductList";

function Home() {
  const [selectedHeaderFilter, setSelectedHeaderFilter] = useState("popular");
  const [selectedBrandFilter, setSelectedBrandFilter] = useState([]);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState([]);
  return (
    <div>
      <AppBar title="فروشگاه" />
      <MobileHeadFilter
        selectedHeaderFilter={selectedHeaderFilter}
        setSelectedHeaderFilter={setSelectedHeaderFilter}
        selectedBrandFilter={selectedBrandFilter}
        setSelectedBrandFilter={setSelectedBrandFilter}
        setSelectedPriceFilter={setSelectedPriceFilter}
      />

      <div className="2xl:container 2xl:max-w-screen-2xl 2xl:mx-auto grid grid-cols-12 grid-rows-[55px_minmax(500px,_1fr)] md:gap-8 md:pb-8">
        <ShopSidebar
          selectedBrandFilter={selectedBrandFilter}
          setSelectedBrandFilter={setSelectedBrandFilter}
          setSelectedPriceFilter={setSelectedPriceFilter}
          isShow="hidden"
          isCategoryShow="block"
        />
        <HeadFilter
          selectedHeaderFilter={selectedHeaderFilter}
          setSelectedHeaderFilter={setSelectedHeaderFilter}
        />
        <ProductList
          selectedHeaderFilter={selectedHeaderFilter}
          selectedBrandFilter={selectedBrandFilter}
          selectedPriceFilter={selectedPriceFilter}
        />
      </div>

      <HomeBottomNav />
    </div>
  );
}

export default Home;
