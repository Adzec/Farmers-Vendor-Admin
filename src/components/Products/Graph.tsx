import { Card } from 'antd';
import { useState } from 'react';
import Chart from 'react-apexcharts';

const ProductGraph = () => {
    // Initialize the state using useState
    const [chartData] = useState({
        options: {
            chart: {
                id: 'apexchart-example',
            },
            xaxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
            },
            // colors: ['#F44336', '#E91E63', '#9C27B0'],
            // fill: {
            //     colors: ['#F44336', '#E91E63', '#9C27B0'],
            // },
        },
        series: [
            {
                name: 'total-added',
                data: [30, 40, 35, 50, 49, 60, 70],
            },
            // {
            //     name: 'series-2',
            //     data: [30, 40, 35, 50, 49, 60, 70],
            // },
        ],
    });

    // Destructuring state for ease of use
    const { options, series } = chartData;

    // Render the chart using the destructured state
    return (
        <section className="mt-10 ">
            <div>
                <h1 className="text-white text-2xl font-bold px-[5px] pb-4">Products Overview</h1>
            </div>
            <Card className="overflow-x-scroll">
                <Chart
                    options={options}
                    series={series}
                    type="bar"
                    height={500}
                    width={450}
                    style={{ width: '100%' }}
                />
            </Card>
        </section>
    );
};

export default ProductGraph;
