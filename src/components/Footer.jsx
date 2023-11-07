import { titles } from "../utils/contants"
import {AiOutlineInstagram,AiFillLinkedin} from "react-icons/ai"
import {BiLogoFacebook} from "react-icons/bi"

const Footer = () => {
    return (
        <div className="bg-[#0059BC] px-6 lg:px-32 max-[640px]:p-4 pt-16 text-white">
            {/* up */}
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <img className="bg-[#0059BC] text-white w-[170px] h-[42px]" src="/src/assets/nttLogo.png" alt="" />
                    <p className="w-[407px] h-[46px] pt-6">Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium aliquam neque.</p>

                    <div className="flex justify-center items-center pt-14 pb-16 ">
                        <input type="text" placeholder="Email"  className="w-[407px] h-10 px-2"/>
                        <button className="bg-[#00254F] w-[101px] h-10 px-2 py-1">Sign Up</button>
                    </div>
                </div>

                <div className="flex gap-40 items-center justify-center  max-[640px]:hidden">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl  mb-3">Title</h2>
                        {
                            titles.map((title, i) => <span key={i}>{title}</span>)
                        }
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl  mb-3">Title</h2>
                        {
                            titles.map((title, i) => <span key={i}>{title}</span>)
                        }
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl  mb-3">Title</h2>
                        {
                            titles.map((title, i) => <span key={i}>{title}</span>)
                        }
                    </div>

                </div>
            </div>

            {/* line */}
            <div className="border"></div>

            {/* down */}

            <div className="flex justify-between items-center py-5 ">
                <p>contact@nttdata.com</p>
                <p>+3 9876 765 444</p>
                <div className="flex justify-center items-center gap-6 text-2xl">
                    <AiOutlineInstagram/>
                    <BiLogoFacebook/>
                    <AiFillLinkedin/>
                </div>
            </div>
        </div>
    )
}

export default Footer
