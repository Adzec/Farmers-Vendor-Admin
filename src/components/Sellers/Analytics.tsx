import { FaUsers } from 'react-icons/fa';
import Cards from '../Global/Cards/Cards';

const SellerAnalysis = () => {
    return (
        <section className="flex flex-col">
            <div>
                <h1 className="text-white text-2xl font-bold px-[5px] pb-4">Dashboard</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4  ">
                <Cards
                    title="Sellers"
                    text="Total joined today"
                    amount="200"
                    icon={FaUsers}
                    color="#fdba74"
                />
                <Cards
                    title="Sellers"
                    text="Total total joined this week"
                    amount="10"
                    icon={FaUsers}
                    color="#f97316"
                />
                <Cards
                    title="Sellers"
                    text="Total joined this month"
                    amount="7"
                    icon={FaUsers}
                    color="#ea580c"
                />
            </div>
        </section>
    );
};
export default SellerAnalysis;
