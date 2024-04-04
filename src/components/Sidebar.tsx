// import user from '../assets/user.png';
import { useState } from 'react';
import { ChevronDown, Diamond, ArrowLeft } from 'lucide-react';
import navItems from '../data/links';
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebar, toggleSidebar }: any) => {
    const [activeIndex, setActiveIndex] = useState(null);

    // function to toggle active index
    const toggleActiveIndex = (index: any) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div
            className={` p-5 fixed top-0 left-0  z-50  text-white  h-screen   transform duration-300  shadow-lg bg-black-200   ${
                activeIndex !== null ? 'overflow-y-scroll' : ''
            } ${sidebar ? 'w-72' : ''}`}
        >
            {/* user profile */}
            <div className="flex xl:gap-5 justify-between xl:justify-start items-start border-b pb-5">
                <span className="bg-gray-200 rounded-[50%] ">
                    {/* <img src={user} alt="" className="w-14 h-14 object-fit" /> */}
                </span>
                <span className="">
                    <p>Welcome,</p>
                    <p className="font-semibold flex text-sm">
                        <>Admin</>
                        {/* <ChevronDown /> */}
                    </p>
                </span>
                <span
                    onClick={toggleSidebar}
                    className="border border-gray-400 flex items-start xl:hidden cursor-pointer text-gray-600"
                >
                    <ArrowLeft size={24} strokeWidth={2} />
                </span>
            </div>
            {/* overview */}
            <div className="flex justify-between mt-5 items-center text-center text-sm"></div>
            {/* menu icons */}
            {/* <div className="bg-gray-800 text-gray-400 font-light rounded-[50px] px-5 py-[8px] mt-10 flex justify-between items-center text-base">
                <p>Menu</p>
                <BookOpenText color="#606060" size={20} />
                <Settings color="#606060" size={20} />
                <CircleHelp color="#606060" size={20} />
            </div> */}
            {/* ul */}
            <ul className="mt-8 flex w-full flex-col gap-6 text-base pl-5">
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className="flex justify-between flex-col gap-2 transform duration-300"
                    >
                        <Link
                            to={item.link}
                            onClick={() => toggleActiveIndex(index)}
                            className="flex justify-between w-full"
                        >
                            <span className="flex items-center gap-5">
                                <item.icon size={18} />
                                <p>{item.label}</p>
                            </span>
                            {item.children && (
                                <ChevronDown
                                    size={20}
                                    className={`${
                                        activeIndex === index
                                            ? 'transform rotate-180 duration-300'
                                            : ''
                                    }`}
                                />
                            )}
                        </Link>

                        {item.children && activeIndex === index && (
                            <ul className="flex flex-col gap-2 pl-10 ">
                                {item.children.map((child, index) => (
                                    <li key={index} className="text-sm">
                                        <Link to={child.link} className="flex items-center gap-2">
                                            <Diamond size={10} /> {child.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
