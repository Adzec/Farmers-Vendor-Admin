import ProductTable from '../../components/Dashboard/ProductTable';
import Layout from '../../components/Layout';
import ProductsAnalysis from '../../components/Products/Analysis';
import ProductGraph from '../../components/Products/Graph';
import ProductStats from '../../components/Products/stats';

const ProductsDash = () => {
    return (
        <Layout>
            <ProductsAnalysis />
            <div className=" mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4  ">
                <ProductTable />
                <ProductStats />
                <ProductGraph />
            </div>
        </Layout>
    );
};

export default ProductsDash;
