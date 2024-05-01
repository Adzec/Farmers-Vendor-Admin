import Image from '../../assets/image.avif';
const UsersOverview = () => {
    return (
        <div>
            <section className="flex  bg-[whitesmoke] py-20 px-5 rounded-lg gap-10 flex-wrap md:flex-nowrap">
                {/* photo */}
                <div className="w-full md:w-[30%] border rounded-t-lg">
                    <img
                        src={Image}
                        alt=""
                        className="w-full h-[400px] object-cover  rounded-t-lg  bg-stone-50 "
                    />
                </div>
                {/* vendor info */}
                <div className="flex flex-col w-full md:w-[60%] h-full p-7 bg-[#eee]">
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <span className="text-xl font-semibold text-gray-700">Name:</span>
                        <span>Jane Doe</span>
                        <span className="text-xl font-semibold text-gray-700">Email:</span>
                        <span> janedoe@gmail.com</span>
                        <span className="text-xl font-semibold text-gray-700">Phone:</span>
                        <span>0791055992</span>
                        <span className="text-xl font-semibold text-gray-700">Address:</span>
                        <span> Nairobi </span>
                        <span className="text-xl font-semibold text-gray-700">Business Type:</span>
                        <span> Farm</span>
                        <span className="text-xl font-semibold text-gray-700">
                            Business Description:
                        </span>
                        <span>
                            {' '}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint est
                            velit magnam voluptatum ex atque officia mollitia. Facere harum adipisci
                            enim saepe repellendus voluptatem impedit blanditiis hic debitis sed!
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <p className="text-xl font-semibold text-gray-700">Actions:</p>
                        <div className="flex w-full gap-2 ">
                            <button className="bg-green-500 p-2 rounded-lg text-white hover:bg-green-700 transition-5">
                                Approve
                            </button>
                            <button className="bg-green-700 p-2 rounded-lg text-white hover:bg-green-500 transition-5">
                                Decline
                            </button>
                            <button className="bg-red-500 p-2 rounded-lg text-white hover:bg-red-700 transition-5">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UsersOverview;
