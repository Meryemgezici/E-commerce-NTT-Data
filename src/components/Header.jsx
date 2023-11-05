import { BiSearch } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"
import Categories from "./Categories"
const Header = () => {

    const [showCategory, setShowCategory] = useState(false);
    return (
        <header className="mt-6 p-4 sm:flex sm:items-center sm:justify-center max-[640px]:flex max-[640px]:flex-col gap-7 ">
            <div className="flex justify-between">
                <img className="w-48 h-6 " src="/logo.png" alt="" />


                <label className="swap swap-rotate">

                    {/* this hidden checkbox controls the state */}
                    <input onClick={() => setShowCategory(!showCategory)} type="checkbox" />


                    {/* hamburger icon */}
                    <GiHamburgerMenu onClick={() => setShowCategory(true)} className="swap-off fill-current min-[640px]:hidden text-3xl" />


                    {/* close icon */}
                    <AiOutlineClose onClick={() => console.log("false")} className="swap-on fill-current min-[640px]:hidden text-3xl" />


                </label>


            </div>


            <form className="flex items-center gap-5  relative max-[640px]:w-[min-[448px]] max-[640px]:mr-5">


                <input placeholder="Search..." type="text" className="rounded border border-[#89919A] lg:w-[685px] sm:w-[364px] max-[640px]:w-[448px] h-10 px-4 py-2 outline-none" />

                <Categories />

                <button className="flex justify-center items-center h-10 w-28 bg-[#0059BC] sm:rounded  max-[640px]:absolute max-[640px]:right-0 max-[640px]:rounded-r">
                    <BiSearch className="w-6 h-6 text-white" />
                </button>



            </form>



        </header>
    )
}

export default Header
