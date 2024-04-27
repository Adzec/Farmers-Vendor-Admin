import { Card } from 'antd';
import LineStat from '../Global/LineStat';

const stats = [
    // { name: 'Total', data: 50, color: 'primary-orange' },
    {
        name: 'Monday',
        data: 80,
        color: '#22c55e',
    },
    {
        name: 'Tuesday',
        data: 70,
        color: '#22c55e',
    },
    {
        name: 'Wednesday',
        data: 60,
        color: '#16a34a',
    },
    {
        name: 'thursday',
        data: 20,
        color: '#15803d',
    },
    {
        name: 'Friday',
        data: 10,
        color: '#166534',
    },
    {
        name: 'Saturday',
        data: 5,
        color: '#14532d',
    },
    {
        name: 'Sunday',
        data: 50,
        color: '#064e3b',
    },
];

const Stats = () => {
    return (
        <section className=" mt-10">
            <h1 className="text-white p-[5px] text-2xl font-bold">Weekly stats</h1>
            <Card>
                <div className="flex flex-col p-2 gap-2">
                    {stats.map((s, i) => (
                        <LineStat key={i} data={s?.data} color={s?.color} name={s?.name} />
                    ))}
                </div>
            </Card>
        </section>
    );
};

export default Stats;
