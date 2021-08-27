import { useState } from 'react';

const UseNavLink = () => {
    const [activeLink, setActiveLink] = useState(0)

    return { activeLink, setActiveLink };

};

export default UseNavLink;
