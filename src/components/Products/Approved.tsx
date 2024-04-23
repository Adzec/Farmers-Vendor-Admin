import Layout from '../../components/Layout';
import App from '../Sellers/Recent';
import Users from '../../components/Sellers/Table';

const Dashboard = () => {
    return (
        <div>
            <Layout>
                <Users />
                <App />
            </Layout>
        </div>
    );
};

export default Dashboard;
