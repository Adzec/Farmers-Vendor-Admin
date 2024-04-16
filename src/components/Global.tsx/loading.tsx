import { Backdrop, CircularProgress } from '@mui/material';
import { useState } from 'react';

const Loading = () => {
    const [loading] = useState(false);

    return (
        <Backdrop open={loading} sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}>
            <CircularProgress sx={{ color: 'white' }} />
        </Backdrop>
    );
};

export default Loading;
