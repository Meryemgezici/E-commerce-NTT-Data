import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { filterFavorite, statuLike } from "../redux/slices/productSlice";

const ProductCard = ({ product, countlikes, setCountLikes, isLikes }) => {
  const [showFull, setShowFull] = useState(false);

  const dispatch = useDispatch();
  let max = 25;
  let shortText = product.description;
  //yazının kesiliceğin mi yoksa tamamının mı göstereceğini belirler
  if (product.description.length > max && !showFull) {
    shortText = product.description.slice(0, max) + "...Daha fazla";
  }

  const handleClick = (e) => {
    // Üründe like tıklayınca linke gitmesin
    e.stopPropagation();
    const updatedLike = !product.like;
    dispatch(statuLike(product.id));
    // beğeni sayısı
    if (updatedLike) {
      setCountLikes(countlikes + 1);
    } else {
      setCountLikes(countlikes - 1);
    }
    // Beğeni sayfasında değilse filtreyi kaldırma
    if (updatedLike === false && isLikes === true) {
      dispatch(filterFavorite());
    }
  };
  const handleDivClick = () => {
    window.open("https://www.google.com", "_blank");
  };

  return (
    <div
      className="flex flex-col  text-[#00254F] relative p-3 border border-[#E6E6E6] min-h-[375px]  mb-10 gap-2 transform transition-transform hover:scale-105 cursor-pointer rounded-md"
      onClick={handleDivClick}
    >
      <img className="rounded-t" src={product.imageUrl} alt="" />
      <h3 className="font-semibold px-2 py-1">{product.name}</h3>
      <p className="px-2 py-1 bg-[#E6EEF8]">{product.price} TL</p>
      <h6 className="px-2 py-1">Description</h6>
      <p className="px-2 lg:block md:hidden sm:block">{product.description}</p>
      <p
        className="px-2 cursor-pointer hidden lg:hidden sm:hidden md:block"
        onClick={(e) => {
          setShowFull(!showFull);
          e.stopPropagation();
        }}
      >
        {shortText}
      </p>
      <p className="mt-auto px-2 text-black ">{product.shippingMethod}</p>

      <button
        onClick={(e) => handleClick(e)}
        className="absolute top-5 right-2 "
      >
        {product.like ? (
          <AiFillHeart className=" text-red-600 mr-2 text-3xl   p-1 rounded-full w-8 h-8" />
        ) : (
          <AiOutlineHeart className=" bg-white mr-2 text-3xl  text-[#D1D1D1] p-1 rounded-full w-8 h-8" />
        )}
      </button>
    </div>
  );
};

export default ProductCard;
