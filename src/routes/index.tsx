import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import ApprovedUsers from '../pages/Sellers/Approved';
import { ToastContainer } from 'react-toastify';
import { customToastContainerStyle } from '../utils/utils';

const Paths = () => {
    return (
        <div>
            <ToastContainer
                position="top-center"
                toastClassName="custom-toast"
                style={customToastContainerStyle}
            />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/sellers/approved" element={<ApprovedUsers />} />
            </Routes>
        </div>
    );
};

export default Paths;
