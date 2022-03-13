import React from "react";
import AppBar from "../components/AppBar";
import HeadFilter from "../components/HeadFilter";
import HomeBottomNav from "../components/HomeBottomNav";
import MobileHeadFilter from "../components/MobileHeadFilter";
import ShopSidebar from "../components/ShopSidebar";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <div>
      <AppBar title="فروشگاه"/>

      <MobileHeadFilter />

      <div className="2xl:container 2xl:max-w-screen-2xl 2xl:mx-auto grid grid-cols-12 grid-rows-[55px_minmax(500px,_1fr)] md:gap-8 md:pb-8">
        <ShopSidebar />
        <HeadFilter />
        <ProductList />
      </div>

      <HomeBottomNav />
    </div>
  );
}

export default Home;
