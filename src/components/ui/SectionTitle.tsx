interface Iprops {
  title: string;
  secondTitle?: string;
}

const SectionTitle = ({ title, secondTitle }: Iprops) => {
  return (
    <div>
      <div className="flex items-center mb-2 ">
        <div className="w-[20px] h-[40px] bg-[#DB4444] dark:bg-gray-300 mr-3 rounded"></div>
        <h4 className="text-[#DB4444] font-semibold dark:text-gray-300">
          {title}
        </h4>
      </div>
      <h2 className="text-3xl font-semibold mb-6">{secondTitle}</h2>
    </div>
  );
};

export default SectionTitle;
