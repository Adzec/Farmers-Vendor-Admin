import userImage from '../assets/dummyLogo.jpeg';
import { useState } from 'react';
import { ChevronDown, Diamond, ArrowLeft } from 'lucide-react';
import navItems from '../data/links';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/features/userSlice';
import { AppDispatch } from '../store/store';
import { getInitials } from '../utils/utils';

const Sidebar = ({ sidebar, toggleSidebar }: any) => {
    const user = useSelector((state: any) => state.auth.user);
    console.log(user);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(null);

    // function to toggle active index
    const toggleActiveIndex = (index: any) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <div
            className={` pt-5 fixed top-0 left-0  z-50  text-white  h-screen   transform duration-300  shadow-lg bg-black-200  flex flex-col  ${
                activeIndex !== null ? 'overflow-y-scroll custom-scrollbar' : ''
            } ${sidebar ? 'w-72' : ''}`}
        >
            {/* user profile */}
            <div className="flex flex-col items-center xl:gap-5 justify-between xl:justify-start  border-b border-gray-700 pb-5 px-10">
                <span className="bg-gray-200 rounded-[50%] ">
                    <Avatar src={userImage} style={{ height: '100px', width: '100px' }} />
                    {/* <img src={user} alt="" className="w-14 h-14 object-fit" /> */}
                </span>
                <span className="">
                    <p className="text-bold text-xl">Welcome</p>
                    <p className="font-semibold flex text-sm">
                        <p>Admin panel</p>
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
            <ul className="mt-8 flex w-full flex-col gap-6 text-base pl-5 px-5">
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

            <div className="mt-auto px-5 py-5 bg-gray-900 ">
                <div className="flex flex-col items-center  gap-2 py-4">
                    <span className="text-white text-sm mr-2 bg-red-700 p-2 rounded-full font-bold customShadow">
                        {user && getInitials(user)}
                    </span>
                    <p className="capitalize  font-bold">{user?.adminName}</p>
                    <p className="text-sm">{user?.adminEmail}</p>
                </div>
                <div className="flex justify-between">
                    <button className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">
                        Settings
                    </button>
                    <button
                        className="text-white bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
