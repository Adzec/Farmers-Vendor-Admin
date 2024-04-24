import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ResetPassword } from '../../store/features/AuthSlice';
import { AppDispatch } from '../../store/store';
import Loading from '../Global/loading';

const PasswordReset = () => {
    const { loading, passwordToken } = useSelector((state: any) => state.auth);
    console.log(`token is:${passwordToken}, and loading state is ${loading}`);
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
        requestToken: passwordToken,
    });
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track if passwords match
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
        if (formData.password === formData.confirmPassword) {
            setPasswordsMatch(true);
            // Dispatch your Redux action to reset the password, passing formData and navigate function
            await dispatch(ResetPassword({ formData, navigate }));
        } else {
            setPasswordsMatch(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black-100 lg:px-0 px-[10px]">
            <div className="mt-4 text-left bg-white shadow-lg w-full max-w-md h-96 mx-auto rounded-t-[8px]">
                <h3 className="text-2xl font-bold text-center bg-primary text-white h-24 flex items-center justify-center rounded-t-[5px]">
                    Administration
                </h3>
                <form onSubmit={handleSubmit} className="px-2 md:px-6 py-6">
                    {loading && <Loading />}
                    <div className="mt-4 relative">
                        <label className="block" htmlFor="password">
                            New Password
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter a new password"
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
                        <label className="block" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Confirm your new password"
                            id="confirmPassword"
                            name="confirmPassword"
                            onChange={handleInputChange}
                            value={formData.confirmPassword}
                            className={`w-full px-4 py-2 mt-2 border rounded-[8px] focus:outline-none focus:ring-1 focus:ring-blue-600 ${
                                passwordsMatch ? '' : 'border-red-500'
                            }`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-10 inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {!passwordsMatch && (
                        <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>
                    )}
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

export default PasswordReset;
