import React from 'react';
import { ProductProp } from '../../common';

import { useNavigate } from 'react-router-dom';

const ProductCard: React.FC<ProductProp> = ({ name, price, description, image }) => {
    const navigate = useNavigate();

    return (
        <div
            className="w-full h-[400px] bg-[#eee] rounded overflow-hidden shadow-lg product-card cursor-pointer border border-secondary transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl mb-2"
            onClick={() => navigate(`/product/1`)}
        >
            <img className="w-full h-1/2 object-cover" src={image} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-sm">{description}</p>
            </div>
            <div className=" flex px-6 py-4 justify-between">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm border-secondary border font-semibold text-secondary mr-2 hover:text-primary hover:bg-white hover:rounded-none">
                    Ksh {price}
                </span>
                <button className="inline-block  border border-secondary  px-3 py-1 text-sm font-semibold text-white bg-primary hover:text-white  hover:bg-secondary ">
                    View
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
