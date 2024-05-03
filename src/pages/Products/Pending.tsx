import TitleHead from '../../components/Global/TitleHead';
import Layout from '../../components/Layout';
import ProductTable from '../../components/Products/Pending';

const PendingProducts = () => {
    return (
        <Layout>
            <TitleHead title="Pending Products" />
            <ProductTable />
        </Layout>
    );
};

export default PendingProducts;
