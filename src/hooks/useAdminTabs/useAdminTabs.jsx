import { useState } from 'react';

const useAdminTabs = () => {
    const [activeAdminTab, setActiveAdminTab] = useState(null);

    return { activeAdminTab, setActiveAdminTab };
};

export default useAdminTabs;
