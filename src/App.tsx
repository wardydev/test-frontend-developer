import { useState } from "react";
import {
  Category,
  EmptyCard,
  Footer,
  Header,
  Modal,
  SearchImport,
} from "./components";
import { formatNumberWithCurrency } from "./helper";

const App = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [products, setProducts] = useState([]);

  const openModal = () => {
    setIsModal(!isModal);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addProduct = (product: any) => {
    console.log(product);
    setProducts(product);
  };

  return (
    <div className="container min-h-screen pb-36 lg:pb-0">
      {isModal && (
        <Modal
          openModal={() => setIsModal(!isModal)}
          addProduct={(product) => addProduct(product)}
        />
      )}
      <div className="wrapper px-2 lg:px-64 md:34 py-12">
        <Header />
        <div className="content relative z-10 px-0 lg:px-12 my-8 lg:my-16">
          <SearchImport />
          <Category />
          <div className="cards grid grid-cols-1 lg:grid-cols-4 space-x-3 relative z-10 mt-6">
            {products.length !== 0 &&
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              products.map((item: any) => {
                return (
                  <div className="bg-[#1B1B1B] px-4 py-4 rounded-lg">
                    <h5 className="font-medium text-[#EFF0F2] mb-2">
                      {formatNumberWithCurrency(item.price)}
                    </h5>
                    <div className="rounded-lg overflow-hidden mb-2 max-h-[153px]">
                      {item.image && (
                        <img src={item.image} alt="" className="w-full" />
                      )}
                    </div>
                    <h3 className="mb-2 text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#A060FA] to-[#C800CC]">
                      {item.productName}
                    </h3>
                    <p className="text-[14px] text-[#9F9E9F] mb-2">
                      {item.description}
                    </p>
                    <p className="text-white font-bold">6pcs</p>
                  </div>
                );
              })}
            <EmptyCard openModal={openModal} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
