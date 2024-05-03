import { categories } from '../../Data/Data';
import Cards from './card';

const CategoryListing = () => {
    return (
        <div>
            <section className=" mt-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4  ">
                {categories.map((c) => (
                    <Cards name={c.name} totals={200} key={c.id} />
                ))}
            </section>
        </div>
    );
};

export default CategoryListing;
