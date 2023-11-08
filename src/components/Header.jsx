import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Categories from "./Categories";
import { categories } from "../utils/contants";

const Header = () => {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <header className="mt-6 p-4 sm:flex sm:items-center sm:justify-center max-[640px]:flex max-[640px]:flex-col gap-7 ">
      <div className="flex justify-between">
        <img className="w-48 h-6 " src="/logo.png" alt="" />
        <GiHamburgerMenu
          onClick={() => setShowCategory(true)}
          className="swap-off fill-current min-[640px]:hidden text-3xl cursor-pointer"
        />
      </div>

      <form className="flex items-center gap-5  relative max-[640px]:w-[min-[448px]] max-[640px]:mr-5">
        <input
          placeholder="Search..."
          type="text"
          className="rounded border border-[#89919A] lg:w-[685px] sm:w-[364px] max-[640px]:w-[448px] h-10 px-4 py-2 outline-none"
        />

        <Categories />

        <div className="flex justify-center items-center h-10 w-28 bg-[#0059BC] sm:rounded  max-[640px]:absolute max-[640px]:right-0 max-[640px]:rounded-r cursor-pointer">
          <BiSearch className="w-6 h-6 text-white" />
        </div>
      </form>

      {showCategory && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 sm:hidden">
          <div className="min-w-[320px] w-full h-full bg-white p-4 overflow-y-auto flex flex-col gap-5">
            <AiOutlineClose
              onClick={() => setShowCategory(false)}
              className="swap-on fill-current min-[640px]:hidden text-3xl cursor-pointer"
            />
            {categories.map((category, i) => (
              <p className="text-2xl font-bold cursor-pointer" key={i}>
                {category}
              </p>
            ))}
            <div className="border"></div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
