import { useState } from "react"
import { categoryOpt } from "../utils/contants"

const Categories = () => {

    const [showCategory,setShowCategory] = useState(false)
    return (
        <>
            {/* <select className="rounded-r absolute bg-[#F4F5F6] right-[133px] top-[1px] text-center px-3 py-[6px] h-[38px] outline-none text-sm max-[640px]:hidden">
                <option selected disabled>Categories</option>
                {categoryOpt.map((category, i) => <option key={i} >{category}</option>)}
            </select> */}

           
               
             
                    <ul className="menu menu-horizontal hover:none focus:none">
                       
                        <li className="flex items-center justify-center  rounded-r absolute bg-[#F4F5F6] right-[169px] top-[1px]  px-3 py-[6px] h-[38px] outline-none text-sm max-[640px]:hidden  ">
                            <details className="disable-active">
                                <summary className="hover:bg-[#F4F5F6] disable-active">
                                    Categories
                                </summary>
                                <ul className=" disable-active">
                                {categoryOpt.map((category, i) => <li key={i} ><a className="hover:bg-[#F4F5F6]  disable-active">{category}</a></li>)}
                                    
                                </ul>
                            </details>
                        </li>
                    </ul>
               
            
        </>

    )
}

export default Categories
