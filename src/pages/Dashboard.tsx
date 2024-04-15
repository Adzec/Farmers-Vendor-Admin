import Orders from '../components/Dashboard/orders';
// import Others from '../components/Dashboard/others';
import Layout from '../components/Layout';

const Dashboard = () => {
    return (
        <div>
            <Layout>
                <Orders />
                {/* <Others /> */}
            </Layout>
        </div>
    );
};

export default Dashboard;
