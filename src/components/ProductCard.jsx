import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { useDispatch } from "react-redux";
import { statuLike } from "../redux/slices/productSlice";


const ProductCard = ({ product, countlikes, setCountLikes, isLikes }) => {


    const [showFull, setShowFull] = useState(false);
    const [showLikedCard, setShowLikedCard] = useState(true);

    const dispatch = useDispatch();
    let max = 25;
    let shortText = product.description;
    //   yazının kesiliceğin mi yoksa tamanınımı göstericeğini belirler
    if (product.description.length > max && !showFull) {
        shortText = product.description.slice(0, max) + '...Daha fazla';
    }

    const handleClick = () => {
        const updatedLike = !product.like;

        dispatch(statuLike(product.id));

        if (updatedLike) {
            setCountLikes(countlikes + 1);
        } else {
            setCountLikes(countlikes - 1);
        }

        if (updatedLike === false && isLikes === true) {
            setShowLikedCard(false);
        } else {
            setShowLikedCard(true);
        }


    }


    return (
        <>
            {
                showLikedCard && <div className="flex flex-col p-3 card border border-[#E6E6E6] min-h-[375px]  mb-10 gap-2 text-[#00254F] ">

                    <div className="relative">
                        <img className="rounded-t" src={product.imageUrl} alt="" />

                        <button onClick={handleClick} className="absolute top-2 right-0">
                            {product.like ? <AiFillHeart className=" text-red-600 mr-2 text-3xl   p-1 rounded-full w-8 h-8" /> : <AiOutlineHeart className=" bg-white mr-2 text-3xl  text-[#D1D1D1] p-1 rounded-full w-8 h-8" />

                            }

                        </button>

                    </div>

                    <h3 className="font-semibold px-2 py-1">{product.name}</h3>
                    <p className="px-2 py-1 bg-[#E6EEF8]">{product.price} TL</p>
                    <h6 className="px-2 py-1">Description</h6>
                    <p className="px-2 lg:block md:hidden sm:block">{product.description}</p>
                    <p className="px-2 cursor-pointer hidden lg:hidden sm:hidden md:block" onClick={() => setShowFull(!showFull)}>{shortText}</p>
                    <p className="mt-auto px-2 text-black ">{product.shippingMethod}</p>



                </div>
            }
        </>

    )
}

export default ProductCard
