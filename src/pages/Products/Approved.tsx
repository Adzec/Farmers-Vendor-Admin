import TitleHead from '../../components/Global/TitleHead';
import Layout from '../../components/Layout';
import ProductTable from '../../components/Products/Approved';

const ApprovedProducts = () => {
    return (
        <Layout>
            <TitleHead title="Approved Products" />
            <ProductTable />
        </Layout>
    );
};

export default ApprovedProducts;
