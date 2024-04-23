import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LoggingUser } from '../../store/features/userSlice';
import { AppDispatch } from '../../store/store';

const Login = () => {
    const [formData, setFormData] = useState({
        adminUserName: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleInputChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        // Dispatch your Redux action to log the user in, passing formData and navigate function
        await dispatch(LoggingUser({ formData, navigate }));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black-100 lg:px-0 px-[10px]">
            <div className="mt-4 text-left bg-white shadow-lg w-full max-w-md h-96 mx-auto rounded-t-[8px]">
                <h3 className="text-2xl font-bold text-center bg-primary text-white h-24 flex items-center justify-center rounded-t-[5px]">
                    Administration
                </h3>
                <form onSubmit={handleSubmit} className="px-2 md:px-6 py-6">
                    <div className="mt-4 relative">
                        <label className="block" htmlFor="password">
                            Password
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter a  new password"
                            id="password"
                            name="password"
                            onChange={handleInputChange}
                            value={formData.password}
                            className="w-full px-4 py-2 mt-2 border rounded-[8px] focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-10 inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <div className="mt-4 relative">
                        <label className="block" htmlFor="password">
                            Password
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter a  new password"
                            id="password"
                            name="password"
                            onChange={handleInputChange}
                            value={formData.password}
                            className="w-full px-4 py-2 mt-2 border rounded-[8px] focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-10 inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <div className="flex items-baseline justify-between">
                        <button className="px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-secondary">
                            Reset Password
                        </button>
                        <Link to="/login" className="text-sm text-blue-600 hover:underline">
                            Back to login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
