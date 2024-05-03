import { Card } from 'antd';
import { categories } from '../../Data/Data';
import Cards from '../Global/Cards/Cards';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { IoBagAddSharp } from 'react-icons/io5';
import { IconButton } from '@mui/material';
import TitleHead from '../Global/TitleHead';

const Banner = () => {
    return (
        <div>
            <TitleHead title="Categories" />
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 ">
                <Cards
                    title="Categories"
                    text="All categories"
                    amount={categories?.length}
                    icon={MdOutlineAddShoppingCart}
                    color="#ea580c"
                />
                <Card className=" flex items-center  ">
                    <div className="flex justify-between items-center gap-10">
                        <div className="flex items-center gap-2 bg-[#eee] p-2 w-fit rounded-lg">
                            <h2>Add a Category</h2>
                            <IconButton
                                className="flex items-center justify-between  h-12 w-12  rounded-full"
                                style={{ backgroundColor: '#eeee' }}
                            >
                                {<IoBagAddSharp className="text-4xl text-green-700" />}
                            </IconButton>
                        </div>
                        <div className="flex items-center gap-2 bg-[#eee] p-2 w-fit rounded-lg">
                            <h2>Add aSubcategory</h2>
                            <IconButton
                                className="flex items-center justify-between  h-12 w-12  rounded-full"
                                style={{ backgroundColor: '#eeee' }}
                            >
                                {<IoBagAddSharp className="text-4xl text-green-700" />}
                            </IconButton>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Banner;
