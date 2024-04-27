import { Box } from '@mui/material';
import PieChart from '../Global/PieChart';
import { Card } from 'antd';

const ProductStats = () => {
    return (
        <div className="mt-10">
            <Box>
                <div>
                    <h1 className="text-white text-2xl font-bold px-[5px] pb-4">Product Stats</h1>
                </div>
                <Card className="flex flex-col gap-5">
                    <PieChart
                        title="Approved Products"
                        value={190}
                        series={[90, 100 - 60]}
                        colors={['#475be8', '#e4e8ef']}
                    />

                    <PieChart
                        title="Pending Products"
                        value={70}
                        series={[100, 100 - 10]}
                        colors={['#475be8', '#e4e8ef']}
                    />
                    <PieChart
                        title="Declined products"
                        value={50}
                        series={[10, 100 - 20]}
                        colors={['#276be8', '#e7e6ef']}
                    />
                </Card>
            </Box>
        </div>
    );
};

export default ProductStats;
