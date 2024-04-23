import { BsFillCartDashFill } from 'react-icons/bs';
import Cards from '../Global.tsx/Cards/Cards';
import { IoPeople } from 'react-icons/io5';
import { PiShoppingBagOpenFill } from 'react-icons/pi';

const Orders = () => {
    return (
        <section className="flex flex-col">
            <div>
                <h1 className="text-white text-2xl font-bold px-[5px] pb-4"> Dashboard</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4  ">
                <Cards
                    title="Orders"
                    text="Total orders today"
                    amount="200"
                    icon={BsFillCartDashFill}
                    color="#f97316"
                />
                <Cards
                    title="Products"
                    text="Total products Today"
                    amount="10"
                    icon={PiShoppingBagOpenFill}
                    color="#9a3412"
                />
                <Cards
                    title="Sellers"
                    text="Total sellers today"
                    amount="7"
                    icon={IoPeople}
                    color="#ea580c"
                />
            </div>
        </section>
    );
};
export default Orders;
