import ICPlus from "/icons/ICPlus.svg";
interface IEmptyCard {
  openModal: () => void;
}

const EmptyCard: React.FC<IEmptyCard> = ({ openModal }) => {
  const handleModal = () => {
    openModal();
  };
  return (
    <div
      className="cards-empty cursor-pointer min-h-[206px] flex items-center justify-center flex-col border-2 border-dashed border-[#313131] bg-[#1e1e1e] rounded-[12px]"
      onClick={handleModal}
    >
      <img src={ICPlus} alt="" />
      <span className="text-white">Add New Product</span>
    </div>
  );
};

export default EmptyCard;
