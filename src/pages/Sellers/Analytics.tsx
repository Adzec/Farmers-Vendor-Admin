import SellersTable from '../../components/Dashboard/SellersTable';
import Layout from '../../components/Layout';
import SellerAnalysis from '../../components/Sellers/Analytics';

const Dashboard = () => {
    return (
        <div>
            <Layout>
                <SellerAnalysis />
                <div className=" mt-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4  ">
                    <div className="text-white"> Graphs go here</div>

                    <SellersTable />
                </div>
            </Layout>
        </div>
    );
};

export default Dashboard;
