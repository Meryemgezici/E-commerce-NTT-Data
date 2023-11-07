import { useEffect, useState } from "react";
import { menuItems } from "../utils/contants";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import MenuDetails from "./MenuDetails";

const Menu = () => {
    const [visibleItems, setVisibleItems] = useState(0);
    const [showMore, setShowMore] = useState(false);
    //mouse item'ın üzerine gelme durumu 
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && window.innerWidth < 1350) {
                setVisibleItems(6);
                // Ekran genişse "More" bölümünü gizle
            } else if (window.innerWidth >= 1024) {
                setVisibleItems(12);
            }
            else {
                setVisibleItems(0);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        setShowMore(!showMore);
    }

    console.log("menu:"+isHovered);

    return (
        <div className="flex flex-col mt-6 relative z-40">
            <div className="flex justify-center items-center mt-6 ">
                <ul className="flex gap-8 text-[#6A6D70] ">

                    {visibleItems === 12 &&
                        <>{menuItems.slice(0, visibleItems).map((item, i) => <li onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}  className={`cursor-pointer pb-3 ${
                                isHovered &&
                                   "hover:border-b-2 hover:border-[#0059BC] hover:text-[#32363A] hover:font-medium "
                                 
                              } cursor-pointer max-h-7 `} key={i} ><a >{item}</a>
                             </li>
                        )}
                        </>
                    }
                    {visibleItems === 6 &&
                        <>
                            {menuItems.slice(0, visibleItems).map((item, i) => <li className="cursor-pointer hover:border-b-2 pb-3 hover:border-[#0059BC] hover:text-[#32363A] hover:font-medium max-h-7" key={i} ><a>{item}</a></li>)}
                            <div>
                                {showMore ? <div className="relative    w-[100px]">
                                    <button onClick={(e) => handleClick(e)} className="flex justify-center items-center gap-1 mb-3">
                                        <p>More</p>
                                        <MdKeyboardArrowUp />
                                    </button>
                                    <div className="absolute flex flex-col justify-center items-center gap-[10px] bg-[#F4F5F6]  min-h-24 p-3 rounded ">
                                        {menuItems.slice(visibleItems, menuItems.length).map((item, i) => <li className="cursor-pointer" key={i} ><a>{item}</a></li>)}
                                    </div>

                                </div> : <button onClick={(e) => handleClick(e)} className="flex justify-center items-center gap-1">
                                    <p>More</p>
                                    <MdKeyboardArrowDown />
                                </button>}
                            </div>
                        </>
                    }


                </ul>

            </div>

            {
                isHovered && <MenuDetails setIsHovered={setIsHovered} />
            }



        </div >

    )
}

export default Menu


