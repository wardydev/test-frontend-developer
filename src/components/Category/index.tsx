import { ButtonCategory } from "..";
import ICPencil from "/icons/ICPencil.svg";

const Category = () => {
  return (
    <div className="relative z-10 py-[16px] px-2 lg:px-[32px] bg-[#1E1E1E] rounded-[12px] mt-8 flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4 space-y-4 lg:space-y-0">
      <h5 className="text-white">Category</h5>
      <div className="flex space-x-0 lg:space-x-4 space-y-2 lg:space-y-0 flex-wrap lg:flex-nowrap">
        <ButtonCategory title="Cocktail" />
        <ButtonCategory title="Shooters" />
        <ButtonCategory title="Premium Spirits" />
        <ButtonCategory title="Non-Alcoholic Beverages" />
      </div>
      <img src={ICPencil} alt="" />
    </div>
  );
};

export default Category;
