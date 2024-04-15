import { Card } from 'antd';
import { order } from '../../Data/Data';

const OrdersTable = () => {
    return (
        <section className="flex mt-10 flex-col ">
            <h1 className="text-white p-[5px] text-2xl font-bold">Recent Orders</h1>
            <Card className="overflow-x-auto  py-5 w-full h-full">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                OrderNo.
                            </th>
                            {/* <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Image
                            </th> */}
                            {/* <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Status
                            </th> */}

                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Price(kshs)
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Status
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Customer
                            </th>
                            {/* <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Actions
                            </th> */}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {order.map((p, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{p?.orderId}</td>
                                {/* <td className="px-6 py-4 whitespace-nowrap">
                                    <img src={p?.image} alt="" className="h-10 w-10 rounded-full" />
                                </td> */}
                                <td className="px-6 py-4 whitespace-nowrap">{p?.price}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{p?.status}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{p?.customer}</td>
                                {/* <td className="px-6 py-4 whitespace-nowrap">{p?.status}</td> */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {/* <div className="flex items-center space-x-2">
                                    <FilePen icon="edit" size={20} />
                                    <Trash2 icon="delete" size={20} />
                                </div> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </section>
    );
};

export default OrdersTable;
