import TitleHead from '../../components/Global/TitleHead';
import Layout from '../../components/Layout';
import App from '../../components/Sellers/Pending';
// import Users from '../../components/Sellers/Table';

const Dashboard = () => {
    return (
        <div>
            <Layout>
                <TitleHead title="Seller Requests" />
                <App />
            </Layout>
        </div>
    );
};

export default Dashboard;
