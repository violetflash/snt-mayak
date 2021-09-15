import { useState } from 'react';

const useSliderItemsNum = () => {
    const [sliderItemsNum, setSliderItemsNum] = useState(2);

    return { sliderItemsNum, setSliderItemsNum };
};

export default useSliderItemsNum;
