import contact from "../../assets/About/happy-young-man-going-shopping-holding-bags-looking-excited-standing-orange-sweater-standing-against-turquoise-wall.jpg";
import Circle from "../../components/ui/Circle";
import { CIRCLE_ABOUT_INFO, EMPLOYEE_INFO } from "../../components/data";
import CircleSection from "../home/CircleSection";
import { Helmet } from "react-helmet";

interface Iprops {}

const About = ({}: Iprops) => {
  return (
    <div className="py-8 px-4 md:px-8 lg:px-12 xl:px-24">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>
      <p className="text-sm font-normal text-black dark:text-white mb-8 md:mb-12">
        <span className="text-[#7D8184]">Home /</span> About
      </p>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-x-12 mb-8 md:mb-12">
        <div className="flex-1 mb-8 lg:mb-0">
          <h4 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Our Story
          </h4>
          <div className="font-light">
            <p className="mb-2">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
        <img
          className="w-full lg:w-[50%] xl:w-[40%] rounded mb-8 lg:mb-0"
          src={contact}
          alt="shopping"
        />
      </div>
      <div className="flex flex-wrap justify-around mb-8 md:mb-12">
        <div className="border border-gray-500 space-y-6 flex flex-wrap w-full py-6 justify-around items-center rounded">
          {CIRCLE_ABOUT_INFO.map((item, index) => (
            <Circle
              key={index}
              icon={item.icon}
              mainTitle={item.mainTitle}
              secondTitle={item.secondTitle}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly mb-8 md:mb-12">
        {EMPLOYEE_INFO.map((item, index) => (
          <div key={index} className="space-y-2 mb-8">
            <img
              className="rounded w-full md:w-[250px] lg:w-[330px]"
              src={item.image}
              alt="person"
            />
            <h5 className="text-lg md:text-xl font-bold">{item.name}</h5>
            <p className="text-md font-light">{item.job}</p>
            {item.icons}
          </div>
        ))}
      </div>
      <div className="flex justify-around mb-8 md:mb-12">
        <CircleSection />
      </div>
    </div>
  );
};

export default About;
