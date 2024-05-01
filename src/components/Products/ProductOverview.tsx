import { useState } from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa6';
import { IoMdMore } from 'react-icons/io';
// import RelatedProducts from './RelatedProducts';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    images: string[];
}

const productDetails: Product[] = [
    {
        id: 1,
        name: 'Expensive Honey',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nihil delectus vel molestiae esse consequuntur est earum optio, dolores eos ex assumenda provident consectetur. Consectetur aliquid amet sapiente placeat distinctio nostrum doloremque voluptas, sit ratione aspernatur, reiciendis in a temporibus iusto expedita laudantium illum, facilis quasi facere consequatur! Nisi, quo?',
        price: 600,
        images: [
            'https://img.freepik.com/free-photo/jar-with-fresh-honey_144627-17145.jpg?t=st=1713627250~exp=1713630850~hmac=36580eafcdb4170bcb3fb8d56cbd2a50b11f52169a7f6052393a30f6f2e8302e&w=740',
            'https://img.freepik.com/free-photo/dripping-honey-glass-jar_23-2148346618.jpg?t=st=1713607452~exp=1713611052~hmac=986d9499f8486088794a00379fe05f5a4860c7f42482759a27aebb4d6ec37378&w=996',
            'https://img.freepik.com/free-photo/tea-winter-drink-wooden-spoon_23-2148717393.jpg?t=st=1713627335~exp=1713630935~hmac=3555465aeb89d0a964193d22f880675e4bd46cd8d2e6f8c1ef9833e2cf9151c9&w=740',
            'https://img.freepik.com/free-photo/high-angle-wooden-honey-dipper-jar-honey_23-2149442354.jpg?t=st=1713627420~exp=1713631020~hmac=560a7cdb18d05d9fe39e6934c93d1a2179dea36fb66f47f24cafd7a065c2282e&w=740',
        ],
    },
];

const ProductDetails = () => {
    const [loading] = useState(false);
    const [activeImage, setActiveImage] = useState(0);

    const handleImageClick = (index: number) => {
        setActiveImage(index);
    };

    return (
        <div className="mx-auto  h-auto pb-10 pt-32  px-5 bg-[whitesmoke] rounded-lg ">
            {/* product Image */}
            <div className="min-h-[200px] flex flex-col lg:flex-row gap-4 ">
                <div className="h-96 flex flex-col lg:flex-row-reverse gap-4">
                    <div className="h-[300px] w-[300px] lg:h-96 lg:w-96 bg-[#eee] ">
                        <img
                            src={productDetails[0].images[activeImage]}
                            alt={`Product ${activeImage + 1}`}
                            className="h-full w-full object-cover mix-blend-multiply"
                        />
                    </div>
                    <div className="h-full">
                        {loading ? (
                            <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
                                {[...Array(4)].map((_el, index) => (
                                    <div
                                        className="h-20 w-20 bg-[#eee] rounded animate-pulse"
                                        key={'loadingImage' + index}
                                    ></div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
                                {productDetails[0]?.images?.map((imgURL, index) => (
                                    <div
                                        className="h-20 w-20 bg-slate-200 rounded"
                                        key={imgURL}
                                        onClick={() => handleImageClick(index)}
                                    >
                                        <img
                                            src={imgURL}
                                            alt={`Product ${index + 1}`}
                                            className="w-full h-full mix-blend-multiply cursor-pointer object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* details */}
                <div className="flex flex-col gap-1">
                    <p className="bg-secondary w-fit p-2 rounded text-[#eee]">Brand</p>
                    <h2 className="text-2xl lg:text-2xl font-semibold my-2">
                        {productDetails[0]?.name}
                    </h2>
                    <p className="capitalize text-slate-400">Animal products</p>

                    <div className="text-orange-600 flex items-center gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                    </div>

                    <div className="flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1">
                        <p className="text-red-600"> ksh {productDetails[0]?.price}</p>
                        <p className="text-slate-400 line-through">ksh 900</p>
                    </div>

                    <div className="flex items-center gap-3 my-2">
                        <button className="border-2 border-red-600 rounded px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white">
                            Buy
                        </button>
                        <button className="border-2 border-red-600 rounded px-3 py-1 min-w-[120px] font-medium text-white bg-red-600 hover:text-red-600 hover:bg-white">
                            Add To Cart
                        </button>
                    </div>

                    <div>
                        <p className="text-slate-600 font-medium my-1 ">Description : </p>
                        <p> {productDetails[0]?.description}</p>
                    </div>
                </div>

                {/* other details */}
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col mt-4 bg-white customShadow ">
                        <div className="flex justify-between items-center border-b ">
                            <h2 className="p-2 rounded text-center text-xl">Sellers details</h2>
                            <IoMdMore className="text-2xl" />
                        </div>
                        <div className="flex flex-col p-3">
                            {' '}
                            <h2 className="text-2xl lg:text-2xl font-semibold my-2">
                                Some details here
                            </h2>
                            <p className="capitalize text-slate-400">More details</p>
                        </div>

                        <div className="p-4 text-sm text-gray-700">
                            <p> {productDetails[0]?.description}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <h2 className="text-green-500 text-center text-2xl my-2">Actions</h2>
                        <div className="flex w-full gap-2 justify-center items-center">
                            <button className="bg-green-500 p-2 rounded-lg text-white hover:bg-green-700 transition-5">
                                Approve
                            </button>
                            <button className="bg-green-700 p-2 rounded-lg text-white hover:bg-green-500 transition-5">
                                Decline
                            </button>
                            <button className="bg-red-500 p-2 rounded-lg text-white hover:bg-red-700 transition-5">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
