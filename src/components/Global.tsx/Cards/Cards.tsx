import { Card } from 'antd';
import { CardProps } from '../../../common';
import { IconButton } from '@mui/material';

const Cards: React.FC<CardProps> = ({ title, text, amount, url, icon: Icon, color }) => {
    return (
        <Card className={`bg-${color}`} style={{ backgroundColor: `${color}` }}>
            <div className=" rounded-lg  flex gap-4 items-center justify-between text-gray-200">
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <p className=" mb-2">{text}</p>
                    <span className="text-2xl font-bold text-white">{amount}</span>
                    <a href={url} className=" hover:underline text-white">
                        View
                    </a>
                </div>
                <IconButton
                    className="flex items-center justify-between  h-24 w-24  rounded-full"
                    style={{ backgroundColor: '#eeee' }}
                >
                    {Icon && <Icon className="text-4xl text-green-700" />}
                </IconButton>
            </div>
        </Card>
    );
};

export default Cards;
