import React from "react";
import footerLogo from "../assets/images/footer-logo.png";
import map from "../assets/images/map.png";

function Footer() {
  return (
    <>
      {/* footer */}
      <div className="md:flex hidden bg-white w-full items-center justify-between">
        <div className="p-10 flex gap-x-6 w-full justify-evenly shadow-[0_-4px_8px_0_rgba(0,0,0,0.1)]">
          <div className="w-[40%]">
            <img className="w-[180px] mb-4" src={footerLogo} alt="" />
            <p>
              دیجی‌ تایز عرضه کننده جدیدترین محصولات الکترونیک نظیر لپ تاپ، گوشی
              هوشمند و ساعت هوشمند می‌باشد.
              <br />
              دیجی تایز افتخار این را داشته که به{" "}
              <span className="text-red-500">۱۲۲,۲۳۲</span> نفر تا به اکنون خدمت
              رسانی داشته باشد.
            </p>
            <div className="flex flex-col gap-y-3 mt-4">
              <div className="flex gap-x-1">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.8917 17.4413L10.7334 19.5997C10.2784 20.0547 9.55504 20.0547 9.08837 19.6113C8.96004 19.483 8.83171 19.3663 8.70337 19.238C7.50171 18.0247 6.41671 16.753 5.44837 15.423C4.49171 14.093 3.72171 12.763 3.16171 11.4447C2.61337 10.1147 2.33337 8.84301 2.33337 7.62967C2.33337 6.83634 2.47337 6.07801 2.75337 5.37801C3.03337 4.66634 3.47671 4.01301 4.09504 3.42967C4.84171 2.69467 5.65837 2.33301 6.52171 2.33301C6.84837 2.33301 7.17504 2.40301 7.46671 2.54301C7.77004 2.68301 8.03837 2.89301 8.24837 3.19634L10.955 7.01134C11.165 7.30301 11.3167 7.57134 11.4217 7.82801C11.5267 8.07301 11.585 8.31801 11.585 8.53967C11.585 8.81967 11.5034 9.09967 11.34 9.36801C11.1884 9.63634 10.9667 9.91634 10.6867 10.1963L9.80004 11.118C9.67171 11.2463 9.61337 11.398 9.61337 11.5847C9.61337 11.678 9.62504 11.7597 9.64837 11.853C9.68337 11.9463 9.71837 12.0163 9.74171 12.0863C9.95171 12.4713 10.3134 12.973 10.8267 13.5797C11.3517 14.1863 11.9117 14.8047 12.5184 15.423C12.635 15.5397 12.7634 15.6563 12.88 15.773C13.3467 16.228 13.3584 16.9747 12.8917 17.4413Z"
                      fill="#FF755C"
                    />
                    <path
                      d="M25.6316 21.3849C25.6316 21.7115 25.5733 22.0499 25.4566 22.3766C25.4216 22.4699 25.3866 22.5632 25.34 22.6565C25.1416 23.0766 24.885 23.4732 24.5466 23.8466C23.975 24.4766 23.345 24.9316 22.6333 25.2232C22.6216 25.2232 22.61 25.2349 22.5983 25.2349C21.91 25.5149 21.1633 25.6665 20.3583 25.6665C19.1683 25.6665 17.8966 25.3866 16.555 24.8149C15.2133 24.2432 13.8716 23.4732 12.5416 22.5049C12.0866 22.1666 11.6316 21.8282 11.2 21.4665L15.015 17.6515C15.3416 17.8965 15.6333 18.0832 15.8783 18.2115C15.9366 18.2349 16.0066 18.2699 16.0883 18.3049C16.1816 18.3399 16.275 18.3515 16.38 18.3515C16.5783 18.3515 16.73 18.2816 16.8583 18.1532L17.745 17.2782C18.0366 16.9866 18.3166 16.7649 18.585 16.6249C18.8533 16.4615 19.1216 16.3799 19.4133 16.3799C19.635 16.3799 19.8683 16.4265 20.125 16.5315C20.3816 16.6365 20.65 16.7882 20.9416 16.9866L24.8033 19.7282C25.1066 19.9382 25.3166 20.1832 25.445 20.4749C25.5616 20.7665 25.6316 21.0582 25.6316 21.3849Z"
                      fill="#FF755C"
                    />
                  </svg>
                </span>
                <span>021-3123123</span>
              </div>
              <div className="flex gap-x-1">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.8334 4.08301H8.16671C4.66671 4.08301 2.33337 5.83301 2.33337 9.91634V18.083C2.33337 22.1663 4.66671 23.9163 8.16671 23.9163H19.8334C23.3334 23.9163 25.6667 22.1663 25.6667 18.083V9.91634C25.6667 5.83301 23.3334 4.08301 19.8334 4.08301ZM20.3817 11.188L16.73 14.1047C15.96 14.723 14.98 15.0263 14 15.0263C13.02 15.0263 12.0284 14.723 11.27 14.1047L7.61837 11.188C7.24504 10.8847 7.18671 10.3247 7.47837 9.95134C7.78171 9.57801 8.33004 9.50801 8.70337 9.81134L12.355 12.728C13.2417 13.4397 14.7467 13.4397 15.6334 12.728L19.285 9.81134C19.6584 9.50801 20.2184 9.56634 20.51 9.95134C20.8134 10.3247 20.755 10.8847 20.3817 11.188Z"
                      fill="#FF755C"
                    />
                  </svg>
                </span>
                <span>mgillanpour79@gmail.com</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-lg text-slate-800">محصولات</h3>
            <div className="h-[2px] w-10 bg-orange-600 mb-3"></div>
            <ul className="flex flex-col gap-y-2">
              <li>تلفن همراه</li>
              <li>لپ تاپ</li>
              <li>ساعت هوشمند</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg text-slate-800 mb-2">موقعیت شرکت</h2>
            <div className="h-[2px] w-10 bg-orange-600 mb-3"></div>
            <div className="flex">
              <img className="w-[200px]" src={map} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
