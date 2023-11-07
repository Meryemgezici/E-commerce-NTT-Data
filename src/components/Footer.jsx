import { subTitles, titles } from "../utils/contants"
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiLogoFacebook } from "react-icons/bi"

const Footer = () => {
    return (
        <div className="bg-[#0059BC] text-white">
            <div className="px-6 lg:px-32 max-[640px]:p-4 ">
                {/* up */}
                <div className="flex justify-between items-center gap-11 ">
                    <div className="flex flex-col pt-16">
                        <img className="bg-[#0059BC] text-white w-[170px] h-[42px]" src="/src/assets/nttLogo.png" alt="" />
                        <p className="w-[407px] h-[46px] pt-6">Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium aliquam neque.</p>

                        <div className="flex  items-center pt-14 pb-16 ">
                            <input type="text" placeholder="Email" className="md:w-[407px] h-10 px-2 sm:w-[275px] w-[200px]" />
                            <button className="bg-[#00254F] w-[101px] h-10 px-2 py-1">Sign Up</button>
                        </div>
                    </div>

                    <div className="hidden xl:flex gap-4 lg:gap-40 items-center justify-center ">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-2xl  mb-3">Title</h2>
                            {
                                subTitles.map((title, i) => <span key={i}>{title}</span>)
                            }
                        </div>

                        <div className="flex flex-col gap-3">
                            <h2 className="text-2xl  mb-3">Title</h2>
                            {
                                subTitles.map((title, i) => <span key={i}>{title}</span>)
                            }
                        </div>

                        <div className="flex flex-col gap-3">
                            <h2 className="text-2xl  mb-3">Title</h2>
                            {
                                subTitles.map((title, i) => <span key={i}>{title}</span>)
                            }
                        </div>

                    </div>

                    <div className="hidden md:block xl:hidden ">
                        <div className="flex flex-col mr-36 text-2xl gap-3">
                            {
                                titles.map((title, i) => <span key={i}>{title}</span>)
                            }
                        </div>

                    </div>
                </div>




            </div>
            {/* line */}
            <div className="border"></div>

            {/* down */}
            <div className="flex justify-between items-center py-5 px-6 lg:px-32 max-[640px]:p-4">
                <p>contact@nttdata.com</p>
                <p className="">+3 9876 765 444</p>
                <div className="hidden md:block">
                    <div className="flex justify-center items-center gap-6 text-2xl">
                        <AiOutlineInstagram />
                        <BiLogoFacebook />
                        <AiFillLinkedin />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Footer
