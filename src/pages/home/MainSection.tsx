import { RotatingTriangles } from "react-loader-spinner";
import homeImage from "../../assets/home/image copy 2.png";
import phone from "../../assets/home/image copy 3.png";
import { Icategory } from "../../components/interfaces";

interface Iprops {
  categoriesLoading: boolean;
  categories: Icategory[];
}

const MainSection = ({ categoriesLoading, categories }: Iprops) => {
  return (
    <section className="flex mb-12 dark:bg-black dark:px-6 rounded-b-3xl">
      <div className="hidden xl:block">
        {categoriesLoading || !categories ? (
          <div className="flex justify-center items-center ">
            <RotatingTriangles
              visible={true}
              height="80"
              width="80"
              colors={["#50B498", "#9CDBA6", "#405D72"]}
              ariaLabel="rotating-triangles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <div className="border-r border-gray-200 pt-7 inline-block pr-20 dark:pb-2">
            {categories.map((item) => (
              <p
                className="pb-3 cursor-pointer hover:bg-gray-200 dark:hover:text-black rounded-md flex"
                key={item._id}
              >
                {item.name}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="relative mt-7 inline-block w-full xl:w-[77%] xl:ms-20">
        <img
          className="h-[340px] w-full  hidden md:block"
          src={homeImage}
          alt="Home Image"
        />
        <img
          className="md:h-[270px] xl:h-[300px] md:absolute md:top-0 md:right-0 md:animate-float "
          src={phone}
          alt="Phone Image"
        />
      </div>
    </section>
  );
};

export default MainSection;
