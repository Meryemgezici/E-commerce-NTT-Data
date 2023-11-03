import { useEffect, useState } from "react";
import { menuItems } from "../utils/contants";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"

const Menu = () => {
    const [visibleItems, setVisibleItems] = useState(0);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                setVisibleItems(6);
                // Ekran genişse "More" bölümünü gizle
            } else if (window.innerWidth >= 1024) {
                console.log("mery");
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

    const handleClick=(e)=>{
        e.preventDefault();
        setShowMore(!showMore);
    }

    console.log(showMore);

    return (
        <div className="flex justify-center items-center  bg-red-600 mt-6 ">
            <ul className="flex gap-6">
                {visibleItems === 12 &&
                    <>{menuItems.slice(0, visibleItems).map((item, i) => <li className="" key={i} ><a>{item}</a></li>)}</>
                }
                {visibleItems === 6 &&
                    <>{menuItems.slice(0, visibleItems).map((item, i) => <li className="" key={i} ><a>{item}</a></li>)}
                        <div>
                            
                            {showMore ? <>
                            <button onClick={(e)=>handleClick(e)} className="flex">
                                <p>More</p>
                                <MdKeyboardArrowUp/>
                            </button>
                                {menuItems.slice(visibleItems, menuItems.length).map((item, i) => <li className="" key={i} ><a>{item}</a></li>)}
                            </>:<button onClick={(e)=>handleClick(e)} className="flex">
                                <p>More</p>
                                <MdKeyboardArrowDown/>
                            </button>}
                        </div>
                    </>
                }
                

            </ul>
            {/* {visibleItems === 12 &&
                <ul>{menuItems.slice(0, visibleItems).map((item, i) => <li className="" key={i} ><a>{item}</a></li>)}</ul>
            }
            {visibleItems === 6 &&
                <ul>{menuItems.slice(0, visibleItems).map((item, i) => <li className="" key={i} ><a>{item}</a></li>)}</ul>
            }
            {visibleItems === 0 &&
                <ul>{menuItems.slice(0, visibleItems).map((item, i) => <li className="" key={i} ><a>{item}</a></li>)}</ul>
            } */}


        </div >

    )
}

export default Menu


