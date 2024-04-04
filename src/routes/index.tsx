import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';

const Paths = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
};

export default Paths;
