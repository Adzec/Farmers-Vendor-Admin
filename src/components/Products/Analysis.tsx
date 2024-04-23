import Cards from '../Global.tsx/Cards/Cards';

import { FaListUl, FaListOl } from 'react-icons/fa';

const ProductsAnalysis = () => {
    return (
        <section className="flex flex-col">
            <div>
                <h1 className="text-white text-2xl font-bold px-[5px] pb-4">Dashboard</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4  ">
                <Cards
                    title="Products"
                    text="Total Added today"
                    amount="200"
                    icon={FaListUl}
                    color="#f97316"
                />
                <Cards
                    title="Products"
                    text="Total total added this week"
                    amount="10"
                    icon={FaListOl}
                    color="#9a3412"
                />
                <Cards
                    title="Sellers"
                    text="Total added this month"
                    amount="7"
                    icon={FaListUl}
                    color="#ea580c"
                />
            </div>
        </section>
    );
};
export default ProductsAnalysis;
