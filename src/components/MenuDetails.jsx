import { subHeaders } from "../utils/contants"

const MenuDetails = () => {

    return (
        <div className="flex absolute top-full left-0">
            <div className="flex">
                <div>
                    <h2>Header</h2>
                    <ul className="flex flex-col">
                        {subHeaders.map((subheader, i) => <li className="" key={i} ><a>{subheader}</a></li>)}
                    </ul>
                </div>

                <div>
                <h2>Header</h2>
                    <ul className="flex flex-col">
                        {subHeaders.map((subheader, i) => <li className="" key={i} ><a>{subheader}</a></li>)}
                    </ul>
                </div>
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default MenuDetails
