import { BsFillCartDashFill } from 'react-icons/bs';
import Cards from '../Global/Cards/Cards';

const Orders = () => {
    return (
        <section className="flex flex-col">
            <div>
                <h1 className="text-white text-2xl font-bold' px-[5px] pb-4">Orders Analytics</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4  ">
                <Cards
                    title="Orders"
                    text="Total orders today"
                    amount="200"
                    icon={BsFillCartDashFill}
                    color="orange-500"
                />
                <Cards
                    title="Orders"
                    text="Total orders this week"
                    amount="200"
                    icon={BsFillCartDashFill}
                    color="orange-500"
                />
                <Cards
                    title="Orders"
                    text="Total orders this month"
                    amount="200"
                    icon={BsFillCartDashFill}
                    color="orange-500"
                />
            </div>
        </section>
    );
};
export default Orders;
