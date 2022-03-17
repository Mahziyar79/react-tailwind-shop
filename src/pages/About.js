import aboutImg from "../assets/images/aboutImg.png";
import AppBar from "../components/AppBar";
import HomeBottomNav from "../components/HomeBottomNav";
const About = () => {
  return (
    <>
      <AppBar title="درباره ما"/>
      <div className="flex flex-col md:flex-row items-center justify-between w-[80%] m-auto my-10">
        <div className="w-[100%] lg:w-[70%]">
          <h2 className="text-2xl lg:text-4xl mb-3">به صفحه درباره ما خوش آمدید</h2>
          <h2 className="text-xl mb-8 text-gray-500">
            این صفحه در حال تکمیل میباشد
          </h2>
          <p className="leading-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
          </p>
        </div>
        <div>
          <img
            className="lg:mt-0 mt-5 mb-10 lg:mb-0"
            src={aboutImg}
            alt="About-us-img"
          ></img>
        </div>
      </div>
      <HomeBottomNav />
    </>
  );
};

export default About;
