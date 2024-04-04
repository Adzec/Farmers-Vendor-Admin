import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { Menu } from 'lucide-react';

const Layout = ({ children }: any) => {
    // toggle sidebar
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => setSidebar(!sidebar);

    // Close sidebar if window width is less than 1200
    useEffect(() => {
        window.innerWidth < 1280 ? setSidebar(false) : setSidebar(true);

        const handleResize = () => {
            // Open sidebar if window width is greater than 1200
            if (window.innerWidth > 1280) {
                setSidebar(true);
            } else {
                setSidebar(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex w-full bg-black-100">
            {/* Sidebar */}
            {sidebar && <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />}
            <div
                className={`flex flex-col w-full gap-4  py-2 min-h-screen ${
                    sidebar ? 'xl:ml-72' : ''
                }`}
            >
                {/* menu icon to open and close sidebar */}
                <div className=" shadow-lg text-white fixed   flex gap-2 w-full top-0  py-3 px-5 z-40 bg-black-200">
                    <Menu onClick={toggleSidebar} className="cursor-pointer" /> MENU
                </div>
                <br />

                <div className="p-[15px] ">{children}</div>
            </div>
        </div>
    );
};

export default Layout;
