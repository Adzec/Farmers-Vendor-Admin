import { products } from '../../Data/Data';
import ProductCard from '../Global/ProductCard';

const ProductListing = () => {
    return (
        <div className="w-full lg:w-full">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mx-auto">
                {products.map((product) => (
                    <div key={product?.key}>
                        <ProductCard
                            image={product?.image}
                            name={product.name}
                            description="lorem ipsum dor siutim augddj yayydi ipsum loren dore si amit"
                            price={product?.price}
                        />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ProductListing;
