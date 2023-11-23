const ButtonCategory = ({ title }: { title: string }) => {
  return (
    <button className="flex items-center justify-center p-2 rounded-[12px] border-2 text-white border-white font-medium w-full lg:w-auto">
      {title}
    </button>
  );
};

export default ButtonCategory;
