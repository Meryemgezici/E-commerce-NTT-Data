import { AiOutlineHeart } from "react-icons/ai"
const Products = () => {
    return (
        <div className="flex flex-col mt-12 border border-red-700 p-3 m-6 lg:m-32 max-[640px]:m-4">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold leading-normal">Content title goes here</h1>
                <div className="flex justify-center items-center">
                    <AiOutlineHeart  style={{ strokeWidth: 10 }} className="w-6 h-6 mr-2 text-xl"/>
                    <p className="mr-5">0 Ürün</p>
                    <button>Beğenilenler</button>
                </div>

            </div>

            <div className="cards">
                <div className="card border h-[600px] w-[300px] mb-10">
                    <img src="src/assets/mobilAd1.png" alt="" />
                    <h3>Pruduct Name</h3>
                    <p>1.2999,00 TL</p>
                    <h6>Description</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam nam expedita totam suscipit qui amet unde est dolores? Expedita ex debitis </p>
                    <p>Ücretsiz - Aynı gün kargo</p>
                </div>
            </div>
        </div>
    )
}

export default Products


