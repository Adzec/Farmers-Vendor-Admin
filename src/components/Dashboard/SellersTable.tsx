import { Avatar, Card } from 'antd';
import { sellers } from '../../Data/Data';
import { RiMore2Fill } from 'react-icons/ri';

const SellersTable = () => {
    return (
        <section className="flex mt-10 flex-col h-auto">
            <h1 className="text-white p-[5px] text-2xl font-bold">Recent Sellers</h1>
            <Card className="overflow-x-auto  py-5 w-full flex flex-col gap-2 h-full ">
                {sellers.map((s, i) => (
                    <Card key={i} className="mb-2 bg-[#eee]  ">
                        <div className="flex justify-between items-center">
                            <Avatar />
                            <div className="flex flex-col gap-1 items-center ">
                                <p className="text-base line-clamp-1">{s.name}</p>
                                <span>{s.phone}</span>
                            </div>
                            <div>
                                <RiMore2Fill className="text-2xl text-green-700" />
                            </div>
                        </div>
                    </Card>
                ))}
            </Card>
        </section>
    );
};

export default SellersTable;
