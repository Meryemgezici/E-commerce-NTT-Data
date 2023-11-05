import { useState } from "react";
import { AiOutlineHeart, AiOutlineArrowRight } from "react-icons/ai"
import { useSelector } from "react-redux"
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
const Products = () => {
    const store = useSelector((store) => store);
    console.log(store);
    const [moreProduct, setMoreProduct] = useState(true);
    const [visibleNumber, setVisibleNumber] = useState(4);

    const handleClick = (e) => {
        e.preventDefault();
        setMoreProduct(!moreProduct);

        if (moreProduct === true) {
            setVisibleNumber(store.products.length);
        } else {
            setVisibleNumber(4);
        }
    }

    console.log(visibleNumber);
    return (
        <div className="flex flex-col mt-12 border border-red-700 p-3 m-6 lg:m-32 max-[640px]:m-4">

            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold leading-normal">Content title goes here</h1>
                <div className="flex justify-center items-center font-bold">
                    <AiOutlineHeart style={{ strokeWidth: 10 }} className="w-6 h-6 mr-2 text-xl" />
                    {/* <AiFillHeart className="text-red-600"/> */}
                    <p className="mr-5 ">0 Ürün</p>
                    <button className="bg-[#0059BC] text-white py-1 px-2 rounded">Beğenilenler</button>
                </div>

            </div>

            {/* eğerki ürünler yüklenmediyse */}
            {store.isLoading && <Loading />}

            {/*Product Cards */}
            <div className="mt-8 md:grid md:grid-cols-4 gap-3">
                {moreProduct ? <>

                    {
                        //her bir ürün için bir tane card oluştur
                        store.products.slice(0, visibleNumber).map((product) => <div key={product.id} className="flex flex-col p-3 card border border-[#E6E6E6] min-h-[375px]  mb-10 gap-2 text-[#00254F] max-[768px]:hidden">
                            <ProductCard key={product.id} product={product} />
                        </div>
                        )
                    }
                </> : <>

                    {
                        store.products.slice(0, visibleNumber).map((product) => <>
                            <div key={product.id} className="flex flex-col p-3 card border border-[#E6E6E6] min-h-[375px]  mb-10 gap-2 text-[#00254F]  max-[768px]:hidden">
                                <ProductCard key={product.id} product={product} />
                            </div>


                        </>


                        )
                    }
                </>

                }

                <div className="flex flex-col p-3 card border border-[#E6E6E6] min-h-[375px]  mb-10 gap-2 text-[#00254F]  md:hidden">
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
                                <ProductCard product={product} />
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>

            </div>

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


