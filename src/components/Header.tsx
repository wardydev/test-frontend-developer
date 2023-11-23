import ICBack from "/icons/ICBack.svg";
import ICProduct from "/icons/ICProduct.svg";

const Header = () => {
  return (
    <div className="header relative z-10">
      <div className="w-full lg:w-2/4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={ICBack} alt="" />
          <span className="font-medium text-white text-[18px]">Back</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src={ICProduct} alt="" />
          <span className="font-medium text-white text-[18px]">
            Product Lists
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
