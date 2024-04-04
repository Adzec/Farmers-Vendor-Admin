import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        // Here you can handle the login logic, such as sending a request to your backend
        console.log('Logging in with:', { email, password });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black-100 lg:px-0  px-[10px]">
            <div className=" mt-4 text-left  bg-white shadow-lg w-full max-w-md h-96 mx-auto  rounded-t-[8px] ">
                <h3 className="text-2xl font-bold text-center bg-primary text-white h-24 flex items-center justify-center rounded-t-[5px]">
                    Administration
                </h3>
                <form onSubmit={handleSubmit} className="px-2 md:px-6 py-6">
                    <div className="mt-4">
                        <label className="block" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                    </div>
                    <div className="flex items-baseline justify-between">
                        <button className="px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-secondary ">
                            Login
                        </button>
                        <a href="#" className="text-sm text-blue-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
