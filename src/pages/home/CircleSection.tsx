import { CIRCLE_INFO } from "../../components/data";
import Circle from "../../components/ui/Circle";

interface Iprops {
  className?: string;
}

const CircleSection = ({ className }: Iprops) => {
  return (
    <>
      <div
        className={`border border-gray-500 w-full py-6 rounded ${className}`}
      >
        <div className="flex flex-wrap gap-y-6 justify-around pt-6 pb-6  md:pt-12 md:pb-12">
          {CIRCLE_INFO.map((item, index) => (
            <Circle
              key={index}
              icon={item.icon}
              mainTitle={item.mainTitle}
              secondTitle={item.secondTitle}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CircleSection;
