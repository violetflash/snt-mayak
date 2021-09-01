import { useState } from 'react';

const UseUserMenu = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    return { menuOpened, setMenuOpened };
};

export default UseUserMenu;
