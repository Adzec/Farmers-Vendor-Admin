import SellersTable from '../../components/Dashboard/SellersTable';
import Layout from '../../components/Layout';
import SellerAnalysis from '../../components/Sellers/Analytics';
import TopSellers from '../../components/Sellers/TopSellers';
import Stats from '../../components/Sellers/stats';

const Dashboard = () => {
    return (
        <div>
            <Layout>
                <SellerAnalysis />
                <div className=" mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4  ">
                    <SellersTable />
                    <TopSellers />
                    <div className="text-white">
                        <Stats />
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Dashboard;
