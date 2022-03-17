import contactImg from "../assets/images/contact-us.png";
import AppBar from "../components/AppBar";
import HomeBottomNav from "../components/HomeBottomNav";
const Contact = () => {
  return (
    <>
      <AppBar title="تماس با ما" />
      <div className="flex flex-col md:flex-row items-center justify-between w-[80%] m-auto my-10">
        <div className="w-[100%] lg:w-[70%]">
          <h2 className="text-2xl lg:text-4xl mb-3">
            به صفحه تماس با ما خوش آمدید
          </h2>
          <h2 className="text-xl mb-8 text-gray-500">
            این صفحه در حال تکمیل میباشد
          </h2>
          <form className="flex flex-wrap md:w-[75%] w-[100%]">
            <div className="w-full flex flex-col md:flex-row gap-y-3">
              <div className="md:ml-2 flex-1">
                <input
                  type="text"
                  className="p-2 rounded-md shadow-sm w-[100%] border border-gray-300"
                  placeholder="ایمیل خود را وارد کنید"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  className="p-2 rounded-md shadow-sm w-[100%] border border-gray-300"
                  placeholder="ایمیل خود را وارد کنید"
                />
              </div>
            </div>
            <div className="w-full">
              <textarea
                placeholder="پیام خود را وارد کنید"
                className="mt-4 p-2 rounded-md shadow-sm w-[100%] border border-gray-300"
                rows="5"
                cols="60"
              ></textarea>
            </div>
            <button type="submit" className="bg-red-400 w-full mt-5 rounded-md shadow-md text-white p-2 mb-20">
              ارسال
            </button>
          </form>
        </div>
        <div>
          <img
            className="lg:w-[550px] lg:mt-0 md:mt-5 mb-10 lg:mb-0"
            src={contactImg}
            alt="Contact-us-img"
          ></img>
        </div>
      </div>
      <HomeBottomNav />
    </>
  );
};

export default Contact;
