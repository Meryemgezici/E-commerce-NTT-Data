import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai"
const ProductCard = ({ product }) => {

    const [showFull, setShowFull] = useState(false);
    let max=25;
    let shortText=product.description;
  //   yazının kesiliceğin mi yoksa tamanınımı göstericeğini belirler
  if (product.description.length > max && !showFull) {
    shortText = product.description.slice(0, max) + '...Daha fazla';
  }
    return (
        <>
            <div className="relative">
                <img className="rounded-t" src={product.imageUrl} alt="" />

                <button className="absolute top-2 right-0">
                    <AiOutlineHeart className=" bg-white mr-2 text-3xl  text-[#D1D1D1] p-1 rounded-full w-8 h-8" />
                </button>

            </div>

            <h3 className="font-semibold px-2 py-1">{product.name}</h3>
            <p className="px-2 py-1 bg-[#E6EEF8]">{product.price} TL</p>
            <h6 className="px-2 py-1">Description</h6>
            <p className="px-2 lg:block md:hidden sm:block">{ product.description}</p>
            <p className="px-2 cursor-pointer hidden lg:hidden sm:hidden md:block" onClick={() => setShowFull(!showFull)}>{shortText}</p>
            <p className="mt-auto px-2 text-black ">{product.shippingMethod}</p>
        </>
    )
}

export default ProductCard
