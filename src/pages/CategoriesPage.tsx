import Banner from '../components/Categories/Banner';
import CategoryListing from '../components/Categories/CategoryListing';
import Layout from '../components/Layout';

const CategoriesPage = () => {
    return (
        <Layout>
            <Banner />
            <CategoryListing />
        </Layout>
    );
};

export default CategoriesPage;
