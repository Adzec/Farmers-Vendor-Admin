import OrdersTable from '../components/Dashboard/OrdersTable';
import ProductTable from '../components/Dashboard/ProductTable';
import SellersTable from '../components/Dashboard/SellersTable';
import Orders from '../components/Dashboard/orders';
// import Others from '../components/Dashboard/others';
import Layout from '../components/Layout';

const Dashboard = () => {
    return (
        <div>
            <Layout>
                <Orders />
                {/* <Others /> */}
                <div className=" mt-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4  ">
                    <OrdersTable />
                    <ProductTable />

                    <SellersTable />
                </div>
            </Layout>
        </div>
    );
};

export default Dashboard;
