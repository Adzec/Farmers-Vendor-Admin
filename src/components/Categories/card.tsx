import { Card } from 'antd';

import { IconButton } from '@mui/material';
import { CategoryProp } from '../../common';
import { RiMore2Fill } from 'react-icons/ri';

const Cards: React.FC<CategoryProp> = ({ name, totals }) => {
    return (
        <Card className="bg-black-200 scale-95 shadow-customs">
            <div className=" rounded-lg  flex gap-4 items-center justify-between text-gray-400">
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold mb-2">{name}</h2>

                    <span className="text-2xl font-bold text-gray-500">{totals}</span>
                    <div className="flex gap-2 text-gray-700">
                        <span className="hover:text-primary transition-3 hover:underline text-base mt-2">
                            Edit
                        </span>
                        <span className="hover:text-primary transition-3 hover:underline text-base mt-2">
                            Delete
                        </span>
                    </div>
                </div>
                <IconButton
                    className="flex items-center justify-between  h-24 w-24  rounded-full"
                    // style={{ backgroundColor: '#eeee' }}
                >
                    <RiMore2Fill className="text-primary text-4xl" />
                </IconButton>
            </div>
        </Card>
    );
};

export default Cards;
