import { CATEGORY_BOX } from "../../components/data";
import SectionTitle from "../../components/ui/SectionTitle";

interface Iprops {}

const CategoryBoxSection = ({}: Iprops) => {
  return (
    <section className="mb-20">
      <SectionTitle title="Categories" secondTitle="Browse By Category" />
      <div className="flex flex-wrap gap-y-4 justify-between">
        {CATEGORY_BOX.map((item, index) => (
          <div
            key={index}
            className="flex sm:w-[170px] sm:h-[145px] w-[130px] h-[100px] border border-gray-300 dark:hover:bg-white dark:hover:text-[#222831] hover:bg-black hover:text-white duration-500 rounded items-center justify-center"
          >
            <div className="flex flex-col items-center">
              <div className="mb-2">{item.icon}</div>
              <h5>{item.text}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryBoxSection;
