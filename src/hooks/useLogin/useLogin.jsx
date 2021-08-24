import { useState } from 'react';

const useLogin = () => {
    const [loginIsOpened, setLoginIsOpened] = useState(false);

    return { loginIsOpened, setLoginIsOpened };
};

export default useLogin;
