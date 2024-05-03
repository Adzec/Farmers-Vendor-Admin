import TitleHead from '../../components/Global/TitleHead';
import Layout from '../../components/Layout';
import App from '../../components/Sellers/Recent';
// import Users from '../../components/Sellers/Table';

const Dashboard = () => {
    return (
        <div>
            <Layout>
                <TitleHead title="Approved Sellers" />
                <App />
            </Layout>
        </div>
    );
};

export default Dashboard;
