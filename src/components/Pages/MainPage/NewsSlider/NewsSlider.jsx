import React from 'react';
import { database, writeUserData } from '../../../../services/firebase';

import NewsSliderItem from "../NewsSliderItem";

writeUserData(database, "admin", "alex", "ktotaam@mail.ru", "none");

const NewsSlider = () => {
    return (
        <div>
            <NewsSliderItem />
            <NewsSliderItem />
        </div>
    )

};

export default NewsSlider;