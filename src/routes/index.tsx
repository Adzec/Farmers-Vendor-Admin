import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import ApprovedUsers from '../pages/Sellers/Approved';
import { ToastContainer } from 'react-toastify';
import { customToastContainerStyle } from '../utils/utils';
import SellerAnalysis from '../pages/Sellers/Analytics';
import PendingSellers from '../pages/Sellers/Pending';
import ForgotPassword from '../pages/ForgotPassword';
import ConfirmCodePage from '../pages/ConfirmCodePage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import ProductsDash from '../pages/Products/ProductsDash';
import ApperovedProducts from '../pages/Products/Approved';
import PendingProducts from '../pages/Products/Pending';

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
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route path="/confirm-code" element={<ConfirmCodePage />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<ProductsDash />} />
                <Route path="/products/approved" element={<ApperovedProducts />} />
                <Route path="/products/pending" element={<PendingProducts />} />
                <Route path="/sellers" element={<SellerAnalysis />} />
                <Route path="/sellers/pending" element={<PendingSellers />} />
                <Route path="/sellers/approved" element={<ApprovedUsers />} />
            </Routes>
        </div>
    );
};

export default Paths;
