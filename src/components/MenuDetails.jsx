import { subHeaders } from "../utils/contants"
import menuImg from "../assets/menu.png"
const MenuDetails = () => {

    return (
        <div className="flex absolute top-full left-1/2 transform -translate-x-1/2 items-center justify-center bg-[#D9D9D9] rounded-[1px] min-h-[300px] w-[1259px] py-[30px] px-[48px] ">
            <div className="flex gap-24 ">
                <div className="flex flex-col gap-2 h-60">
                    <h2 className="text-lg font-bold">Header</h2>
                    <ul>
                        {subHeaders.map((subheader, i) => <li className="pb-2" key={i} ><a>{subheader}</a></li>)}
                    </ul>
                </div>

                <div className="flex flex-col gap-2 h-60">
                <h2 className="text-lg font-bold">Header</h2>
                    <ul className="flex flex-col h-60">
                        {subHeaders.map((subheader, i) => <li className="pb-2" key={i} ><a>{subheader}</a></li>)}
                    </ul>
                </div>
                <img src={menuImg} alt="" />
            </div>
        </div>
    )
}

export default MenuDetails
