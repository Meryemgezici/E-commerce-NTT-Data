import { useState } from "react";
import { categoryOpt } from "../utils/contants";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const Categories = () => {
  // Kategorileri listesini göster
  const [showCategory, setShowCategory] = useState(false);
  // seçilen kategoriyi göster
  const [selectCate, setSelectCate] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setShowCategory(!showCategory);
  };

  const selectClick = (category) => {
    setSelectCate("");
    setSelectCate(category);
    setShowCategory(false);
  };

  return (
    <>
      {!showCategory ? (
        <div>
          {selectCate === "" ? (
            <button
              onClick={(e) => {
                handleClick(e);
              }}
              className="flex justify-center items-center gap-4 rounded-r absolute bg-[#F4F5F6] right-[153px] top-[1px]  px-3 py-[6px] h-[38px] min-w-[132px] outline-none text-sm max-[640px]:hidden"
            >
              <p>Categories</p>
              <MdKeyboardArrowDown className="text-3xl" />
            </button>
          ) : (
            <button
              onClick={(e) => {
                handleClick(e);
              }}
              className="flex justify-center items-center gap-4 rounded absolute bg-white border border-[#0059BC] right-[153px] top-[1px]  px-3 py-[6px] h-[38px] min-w-[132px]  text-sm max-[640px]:hidden"
            >
              <p>{selectCate}</p>
              <MdKeyboardArrowDown className="text-3xl" />
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-3 absolute right-[132px]  top-[1px]">
          <button
            onClick={(e) => {
              handleClick(e);
            }}
            className="flex items-center justify-between gap-4 rounded bg-white min-w-[132px]   px-3 py-[6px] h-[38px]  border border-[#0059BC] text-sm "
          >
            <p>{selectCate}</p>
            <MdKeyboardArrowUp className="text-3xl" />
          </button>
          {/* kategorileri listesini ekrana basma */}
          <ul className="flex flex-col justify-center items-center rounded p-3 w-[170px] h-52 bg-[#00254F] text-white gap-2 z-50">
            {categoryOpt.map((category, i) => (
              <li
                onClick={() => selectClick(category)}
                className=" w-[132px] h-[60px] px-2 py-1 cursor-pointer hover:bg-[#0059BC] rounded"
                key={i}
              >
                <a>{category}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Categories;

{
  /* <div>
{showCategory ?
    <button onClick={(e) => { handleClick(e) }} className="flex justify-center items-center gap-2 rounded-r absolute bg-[#F4F5F6] right-[153px] top-[1px]  px-3 py-[6px] h-[38px] w-[156px] outline-none text-sm max-[640px]:hidden">
        <p >Categories
        </p>
        <MdKeyboardArrowDown className="text-2xl" />
    </button>:<button onClick={(e) => { handleClick(e) }} className=" rounded-r absolute bg-white right-[153px] top-[1px]  px-3 py-[6px] h-[38px] w-[156px] border border-[#0059BC] text-sm ">
        <MdKeyboardArrowUp className="flex justify-center items-center text-3xl" />
        <ul className=" disable-active">
                {categoryOpt.map((category, i) => <li key={i+1} ><a className="hover:bg-[#F4F5F6]  disable-active">{category}</a></li>)}
                    
                </ul>
    </button>
}

</div> */
}

{
  /* <ul className="menu menu-horizontal hover:none focus:none">
                       
                        <li className="flex items-center justify-center  rounded-r absolute bg-[#F4F5F6] right-[169px] top-[1px]  px-3 py-[6px] h-[38px] outline-none text-sm max-[640px]:hidden  ">
                            <details className="disable-active">

                                <summary className="hover:bg-[#F4F5F6] disable-active">
                                    Categories
                                </summary>
                                
                            </details>
                        </li>
                    </ul> */
}

{
  /* <select className="rounded-r absolute bg-[#F4F5F6] right-[133px] top-[1px] text-center px-3 py-[6px] h-[38px] outline-none text-sm max-[640px]:hidden">
                <option selected disabled>Categories</option>
                {categoryOpt.map((category, i) => <option key={i} >{category}</option>)}
            </select> */
}

{
  /* <ul className=" disable-active">
                            {categoryOpt.map((category, i) => <li key={i + 1} ><a className="hover:bg-[#F4F5F6]  disable-active">{category}</a></li>)}

                        </ul> */
}

{
  /* <p>{selectCate ? selectCate:setSelectCate(null)}</p>
                            <MdKeyboardArrowUp className="text-3xl" /> */
}
