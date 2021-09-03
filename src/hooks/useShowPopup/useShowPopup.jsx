import { useState } from 'react';

const useShowPopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    return { showPopup, setShowPopup };

};

export default useShowPopup;
