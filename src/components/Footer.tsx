const Footer = () => {
  return (
    <footer className="footer bg-[#1e1e1e] w-full fixed z-10 bottom-0 left-0 flex flex-col lg:flex-row pb-6 lg:pb-0">
      <ul className="flex justify-around w-full border-t-2 border-[#EF9533]">
        <li className="py-2 cursor-pointer  text-[#EF9533] hover:text-[hsl(31,85%,45%)]">
          Nightclub Profile
        </li>
        <li className="py-2 cursor-pointer  text-[#EF9533] hover:text-[hsl(31,85%,45%)]">
          Featured
        </li>
        <li className="py-2 cursor-pointer  text-[#EF9533] hover:text-[hsl(31,85%,45%)]">
          Beverages
        </li>
      </ul>
      <ul className="flex justify-around w-full border-t-2 border-[#454545] ">
        <li className="py-2 cursor-pointer text-[#9F9E9F] hover:text-[hsl(300,1%,45%)]">
          Table Information
        </li>
        <li className="py-2 cursor-pointer text-[#9F9E9F] hover:text-[hsl(300,1%,45%)]">
          Operational Hour
        </li>
      </ul>
      <ul className="flex justify-around lg:w-auto w-full">
        <li className="py-4 lg:py-2 mt-4 lg:mt-0 px-20 bg-[#AB5CFA] hover:bg-[hsl(270,94%,50%)] text-white cursor-pointer w-full lg:w-auto text-center">
          NEXT
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
