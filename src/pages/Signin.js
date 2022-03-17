import AppBar from "../components/AppBar";
import HomeBottomNav from "../components/HomeBottomNav";

const Signin = () => {
  return (
    <>
      <AppBar title="ثبت نام / ورود" />
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-y-6 border border-gray-300 rounded-md p-10 my-20 lg:w-[35%] shadow-sm bg-white">
          <h2 className="text-center text-4xl text-orange-600">دیجی تایز</h2>
          <h3 className="my-4">ورود / ثبت نام</h3>
          <form>
            <div className="flex flex-col gap-y-2 mb-3">
              <label htmlFor="signin" className="text-sm text-gray-400">
                شماره موبایل و یا ایمیل خود را وارد کنید
              </label>
              <input id="signin" type="text" className="p-1 border border-gray-300 rounded-md"></input>
            </div>
            <button className="bg-red-400 w-full rounded-md shadow-md text-white py-2 px-4">
              ورود به دیجی تایز
            </button>
          </form>
        </div>
      </div>
      <HomeBottomNav />
    </>
  );
};

export default Signin;
