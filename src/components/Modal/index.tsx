import { useState } from "react";
import ICUpload from "/icons/ICUpload.svg";
import ICClose from "/icons/ICClose.svg";

interface IModal {
  openModal: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addProduct: (product: any) => void;
}

interface ChangeEvent<T = HTMLInputElement | HTMLTextAreaElement> {
  target: T;
}

interface SelectedEvent<T = HTMLSelectElement> {
  target: T;
}

const Modal: React.FC<IModal> = ({ openModal, addProduct }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [inputModal, setInputModal] = useState({
    productName: "",
    menuCode: "",
    description: "",
    price: "",
    discount: "",
  });
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleModal = () => {
    openModal();
  };

  const handleInputChange = (e: ChangeEvent) => {
    setInputModal((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectedCategory = (e: SelectedEvent) => {
    setSelectedCategory(e.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedFile(file);
      setFileName(file.name);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const product = [
      {
        productName: inputModal.productName,
        menuCode: inputModal.menuCode,
        description: inputModal.description,
        price: inputModal.price,
        discount: inputModal.discount,
        image: previewUrl,
        category: selectedCategory,
      },
    ];

    addProduct(product);
    openModal();
  };

  return (
    <div className="bg-[#171717CC] fixed top-0 left-0 h-screen w-screen z-50 flex items-center justify-center">
      <div className="relative w-[600px]">
        <div className="modal w-full h-[600px] overflow-y-auto relative bg-[#222222] rounded-xl">
          <div
            className="absolute top-[16px] right-[16px] cursor-pointer"
            onClick={handleModal}
          >
            <img src={ICClose} alt="ICClose" />
          </div>
          <div className="pt-12 pb-6 px-8">
            <h3 className="text-[18px] text-white font-bold text-center mb-6">
              Add Menu
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="w-full grid grid-cols-2 space-x-4 mb-5">
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="productName"
                    className="text-[14px] font-medium mb-2 text-white"
                  >
                    Your Product Name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={inputModal.productName}
                    onChange={handleInputChange}
                    placeholder="Product Name"
                    className="bg-[#1A1A1A] border-2 border-[#323232] text-[14px] py-3 px-3 rounded-lg focus:outline-none text-[#b9babc] w-full"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="productName"
                    className="text-[14px] font-medium mb-2 text-white"
                  >
                    Menu Code
                  </label>
                  <input
                    type="text"
                    name="menuCode"
                    value={inputModal.menuCode}
                    onChange={handleInputChange}
                    placeholder="Menu Code"
                    className="bg-[#1A1A1A] border-2 border-[#323232] text-[14px] py-3 px-3 rounded-lg focus:outline-none text-[#b9babc] w-full"
                  />
                </div>
              </div>
              <div className="mb-5">
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="productName"
                    className="text-[14px] font-medium mb-2 text-white"
                  >
                    Category
                  </label>
                  <select
                    placeholder="Select Category"
                    onChange={handleSelectedCategory}
                    className="bg-[#1A1A1A] border-2 border-[#323232] text-[14px] py-3 px-3 rounded-lg focus:outline-none text-[#b9babc] w-full"
                  >
                    <option value="default">Select category</option>
                    <option value="category-1">Category 1</option>
                    <option value="category-2">Category 2</option>
                    <option value="category-3">Category 3</option>
                    <option value="category-4">Category 4</option>
                    <option value="category-5">Category 5</option>
                  </select>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="productName"
                    className="text-[14px] font-medium mb-2 text-white"
                  >
                    Tell me more about your product{" "}
                    <span className="text-[#F47566]">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={inputModal.description}
                    onChange={handleInputChange}
                    className="bg-[#1A1A1A] border-2 border-[#323232] text-[14px] py-3 px-3 rounded-lg focus:outline-none text-[#b9babc] w-full"
                    placeholder="Product description"
                  ></textarea>
                </div>
              </div>
              <div className="w-full grid grid-cols-2 space-x-4 mb-5">
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="productName"
                    className="text-[14px] font-medium mb-2 text-white"
                  >
                    Price <span className="text-[#F47566]">*</span>
                  </label>
                  <div className="bg-[#1A1A1A] border-2 border-[#323232] text-[14px] w-full rounded-lg px-3 flex items-center">
                    <span className="mr-2 text-white text-[14px] font-semibold">
                      NT$
                    </span>
                    <input
                      type="number"
                      name="price"
                      value={inputModal.price}
                      onChange={handleInputChange}
                      placeholder="Price"
                      className="py-3 bg-transparent focus:outline-none text-[#b9babc] w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="productName"
                    className="text-[14px] font-medium mb-2 text-white"
                  >
                    Discount price (optional)
                  </label>
                  <div className="bg-[#1A1A1A] border-2 border-[#323232] text-[14px] w-full rounded-lg px-3 flex items-center">
                    <span className="mr-2 text-white text-[14px] font-semibold">
                      NT$
                    </span>
                    <input
                      type="text"
                      name="discount"
                      value={inputModal.discount}
                      onChange={handleInputChange}
                      placeholder="Discounted price"
                      className="py-3 bg-transparent focus:outline-none text-[#b9babc] w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start mb-5">
                <label
                  htmlFor="productName"
                  className="text-[14px] font-medium mb-2 text-white"
                >
                  Image <span className="text-[#F47566]">*</span>
                </label>
                <div className="bg-[#1A1A1A] border-2 border-[#323232] text-[14px] w-full rounded-lg px-3 flex items-center">
                  <input
                    type="file"
                    placeholder="Select File"
                    className="hidden"
                    id="fileInput"
                    onChange={handleFileChange}
                  />
                  <label
                    className="py-3 bg-transparent focus:outline-none text-[#b9babc] w-full"
                    htmlFor="fileInput"
                  >
                    {(fileName || selectedFile?.name) ?? "Select File"}
                  </label>
                  <img src={ICUpload} alt="ICUpload" />
                </div>
              </div>
              <div className="mb-5 flex items-center justify-between">
                <label
                  htmlFor="productName"
                  className="text-[14px] font-medium mb-2 text-white"
                >
                  Enable Variant
                </label>
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={isChecked}
                      onChange={handleToggle}
                    />
                    <div
                      className={`toggle__line w-12 h-6 rounded-full shadow-inner ${
                        isChecked ? "bg-[#AB5CFA]" : "bg-[#2B2E34]"
                      }`}
                    ></div>
                    <div
                      className={`toggle__dot absolute top-2/4 -translate-y-2/4 left-[5px] w-[18px] h-[18px] bg-white rounded-full shadow-md transform transition-transform ${
                        isChecked ? "translate-x-6" : "translate-x-0"
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
              <div>
                <button
                  placeholder="Menu Code"
                  className="border-2 border-[#323232] text-[16px] font-medium py-3 px-3 rounded-lg focus:outline-none text-white w-full bg-gradient-to-r from-[#A060FA] to-[#C800CC]"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="p-4 flex justify-center flex-col text-left bg-red w-[220px] min-h-[190px] bg-gradient-to-r from-[#A060FA] to-[#C800CC] absolute top-0 -right-[40%] rounded-lg">
          <h5 className="text-[#F6F6F6] font-bold mb-4">
            Looking for variant ?
          </h5>
          <p className="text-[#F6F6F6] font-medium text-[14px] mb-2">
            Don’t worry!!
          </p>
          <p className="text-[#F6F6F6] font-medium text-[14px]">
            size, sugar level, ice level will be unlocked if you already
            approved by admin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
