import React from "react";
import { Link } from "react-router-dom";
import AppBar from "../components/AppBar";
import HomeBottomNav from "../components/HomeBottomNav";
import asusImage from '../assets/images/asusBrand.png';
import appleImage from '../assets/images/AppleBrand.png';
import xiaomiImage from '../assets/images/xiaomiBrand.png';
import lenovoImage from '../assets/images/lenovoBrand.png';
import mobileBrand from '../assets/images/mobile-category.png';
import laptopImage from '../assets/images/laptop-category.png';
import watchImage from '../assets/images/watch-category.png';

function CategoryPage() {
  return (
    <>
      <AppBar title="دسته بندی" />
      <div className="container 2xl:max-w-screen-2xl 2xl:mx-auto p-4 md:p-10">
        <div className="flex flex-col mb-10">
          <div className="flex items-end">
            {/* category main image */}
            <img src={mobileBrand} alt="" />

            <div className="flex flex-col md:flex-row mr-1">
              <div className="text-orange-400 mb-2 md:order-2 md:self-center md:mr-4 self-end">
                <Link to="/">مشاهده همه</Link>
              </div>
              <div className="flex overflow-x-auto md:order-1">
                <img src={appleImage} alt="" />
                <img src={xiaomiImage} alt="" />
                <img src={asusImage} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-10">
          <div className="flex items-end">
            {/* category main image */}
            <img src={laptopImage} alt="" />

            <div className="flex flex-col md:flex-row mr-1">
              <div className="text-orange-400 mb-2 md:order-2 md:self-center md:mr-4 self-end">
                <Link to="/">مشاهده همه</Link>
              </div>
              <div className="flex overflow-x-auto md:order-1">
                <img src={asusImage} alt="" />
                <img src={lenovoImage} alt="" />
                <img src={appleImage} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-20">
          <div className="flex items-end">
            {/* category main image */}
            <img src={watchImage} alt="" />

            <div className="flex flex-col md:flex-row mr-1">
              <div className="text-orange-400 mb-2 md:order-2 md:self-center md:mr-4 self-end">
                <Link to="/">مشاهده همه</Link>
              </div>
              <div className="flex overflow-x-auto md:order-1">
                <img src={xiaomiImage} alt="" />
                <img src={lenovoImage} alt="" />
                <img src={appleImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeBottomNav />
    </>
  );
}

export default CategoryPage;
