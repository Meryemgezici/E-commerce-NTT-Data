import { useState } from "react";
import { AiOutlineHeart, AiOutlineArrowRight } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { filterFavorite, removeFilter } from "../redux/slices/productSlice";
const Products = () => {
    const store = useSelector((store) => store);
    const [moreProduct, setMoreProduct] = useState(true);
    const [visibleNumber, setVisibleNumber] = useState(4);
    const [countlikes, setCountLikes] = useState(0);
    const [isLikes, setIsLikes] = useState(false);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        setMoreProduct(!moreProduct);

        if (moreProduct === true) {
            setVisibleNumber(store.mainProducts.length);
        } else {
            setVisibleNumber(4);
        }

    }

    const favoritesClick = () => {
        dispatch(filterFavorite());
        setIsLikes(!isLikes);
       
    }

    
    return (
        <div className="flex flex-col  mt-12 p-3 m-6 lg:m-32 max-[640px]:m-4">

            <div className="flex items-center justify-between flex-col sm:flex-row mb-4">
                <h1 className="text-3xl font-bold leading-normal">Content title goes here</h1>
                <div className="flex justify-center items-center font-bold">
                    <AiOutlineHeart style={{ strokeWidth: 10 }} className="w-6 h-6 mr-2 text-xl" />
                    {/* <AiFillHeart className="text-red-600"/> */}
                    <p className="mr-5 ">{countlikes} Ürün</p>


                    {isLikes ? <p onClick={() => {
                        dispatch(removeFilter());
                        setIsLikes(!isLikes);
                        // setMoreProduct(!moreProduct);
                    }} className="bg-white text-[#0059BC] py-1 px-2 rounded border border-[#0059BC] cursor-pointer">Tüm Ürünler</p> : <p onClick={() => favoritesClick()} className="bg-[#0059BC] text-white py-1 px-2 rounded cursor-pointer">Beğenilenler</p>
                    }


                </div>

            </div>

            {/* eğerki ürünler yüklenmediyse */}
            {store.isLoading && <Loading />}

            {/*Product Cards */}

            {moreProduct ? <div className="mt-8 md:grid md:grid-cols-4 gap-3 max-[768px]:hidden">

                {
                    //her bir ürün için bir tane card oluştur
                    store.products.slice(0, visibleNumber).map((product) => <>
                        <ProductCard key={product.id} product={product} countlikes={countlikes} setCountLikes={setCountLikes} isLikes={isLikes} />
                    </>


                    )
                }
            </div> : <div className="mt-8 md:grid md:grid-cols-4 gap-3 max-[768px]:hidden">

                {
                    store.products.slice(0, visibleNumber).map((product) => <>

                        <ProductCard product={product} countlikes={countlikes} setCountLikes={setCountLikes} isLikes={isLikes} />
                    </>


                    )
                }
            </div>

            }

            <div className="md:hidden">
                <Splide
                    options={{
                        type: 'fade',
                        perPage: 1,
                        autoplay: true,
                        interval: 100000,
                        rewind: true,
                    }}
                >
                    {store.products.slice(0, store.products.length).map((product) => (
                        <SplideSlide key={product.id}>
                            <ProductCard product={product} countlikes={countlikes} setCountLikes={setCountLikes} isLikes={isLikes} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>

            {isLikes &&
                <>
                    {countlikes === 0 && <p className="flex justify-center items-center  text-[#0059BC]  font-normal rounded py-4 px-8 text-3xl">Favorilerde ürün yok.</p>
                    }
                </>
            }
            <button onClick={(e) => handleClick(e)} className="flex justify-center items-center max-[768px]:hidden">
                <div className="flex items-center gap-2 bg-[#0059BC] text-white font-normal rounded py-4 px-8 ">
                    {
                        moreProduct ? <p >Daha Fazla</p> : <p>Daha Az</p>
                    }
                    <AiOutlineArrowRight />
                </div>
            </button>
        </div>
    )
}

export default Products


