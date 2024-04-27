import { Box, Stack, Typography } from '@mui/material';

// import { PieChartProps } from "interfaces/home";
import ReactApexChart from 'react-apexcharts';

const PieChart = ({ title, value, series, colors }: any) => {
    return (
        <Box
            id="chart"
            flex={1}
            display="flex"
            bgcolor={'black'}
            padding="0.76rem 0.7rem"
            boxShadow={'0px 4px 8px 0px rgba(0, 0, 0, 0.2)'}
            minHeight="150px"
            marginBottom="20px"
            width={'100%'}
            borderRadius="0.2rem"
            // backgroundColor="black"
        >
            <Stack direction={'column'}>
                <Typography fontSize={'15px'} color="#808191">
                    {title}
                </Typography>

                <Typography fontSize={'24px'} color="#fff" mt={2} fontWeight="700">
                    {value}
                </Typography>
            </Stack>
            <ReactApexChart
                options={{
                    chart: { type: 'donut' },
                    colors,
                    legend: { show: false },
                    dataLabels: { enabled: false },
                }}
                series={series}
                type="donut"
                width={'150px'}
            />
        </Box>
    );
};

export default PieChart;
