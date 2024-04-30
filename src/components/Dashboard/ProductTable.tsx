import { Card } from 'antd';
import { products } from '../../Data/Data';
import Image from '../../assets/Apple.jpg';

const ProductTable = () => {
    return (
        <section className="flex mt-10 flex-col">
            <h1 className="text-white p-[5px] text-2xl font-bold">Recent Products</h1>
            <Card className="overflow-x-auto  py-5 w-full h-full">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Title
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Image
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Likes
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Stock?
                            </th>
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
                            {/* <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Actions
                            </th> */}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {products?.slice(0, 6).map((p, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{p?.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <img
                                        src={Image}
                                        alt=""
                                        className="h-10 w-10 rounded-full object-cover"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{'Jane Doe'}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {p?.inStock ? 'Yes' : 'No'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{p?.price}</td>
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

export default ProductTable;
