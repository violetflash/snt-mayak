import React, { useEffect, useState } from 'react';
import { MAIN_REF, useFirebase } from "../../../../../context/FirebaseProvider/FirebaseProvider";

import s from "./NewsSliderParams.module.scss";

const NewsSliderParams = () => {
    const { setNewsSliderParams } = useFirebase();
    const { fdb } = useFirebase();
    const [newsParams, setNewsParams] = useState(
        {
            newsToShow: 1,
            slideSpeed: 500,
            autoplayState: false,
            infiniteState: false,
            autoplaySpeedState: 3000
        }
    );

    useEffect(() => {
        const paramsRef = fdb.ref(MAIN_REF + "/params/newsSlider/");
        const refs = [paramsRef];
        paramsRef
            .on('value', (res) => {
                if (res.exists()) {
                    setNewsParams(res.val());
                } else {
                    setNewsParams({});
                }
            })

        return () => {
            refs.forEach((ref) => ref.off());
        }
    }, [fdb]);


    const sliderParamsHandler = (e) => {
        const target = e.target;

        if (target.type === "checkbox") {
            setNewsSliderParams(target.name, target.checked);
            return;
        }

        setNewsSliderParams(target.name, target.value);
    };

    const newsToShow =
        <label className={s.params__label}>
            <span>Новостей в слайдере на главной странице:</span>
            <select
                name="newsToShow"
                className={s.params__select}
                value={newsParams.newsToShow}
                onChange={sliderParamsHandler}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </label>
    ;

    const slideSpeed =
        <label className={s.params__label}>
            <span>Скорость прокрутки (сек.)</span>
            <select
                name="slideSpeed"
                value={newsParams.slideSpeed}
                onChange={sliderParamsHandler}>
                <option value="500">0.5</option>
                <option value="1000">1</option>
                <option value="1500">1.5</option>
                <option value="2000">2</option>
                <option value="2500">2.5</option>
            </select>
        </label>
    ;

    const autoplayState =
        <label className={s.params__label}>
            <span>Автом. прокрутка</span>
            <input
                name="autoplayState"
                type="checkbox"
                onChange={sliderParamsHandler}
                checked={newsParams.autoplayState}/>
        </label>
    ;

    const autoplaySpeedState =
        <label className={s.params__label}>
            <span>Время на слайд (сек.)</span>
            <select
                name="autoplaySpeedState"
                value={newsParams.autoplaySpeedState}
                onChange={sliderParamsHandler}>
                <option value="1500">2</option>
                <option value="3000">3</option>
                <option value="4000">5</option>
                <option value="7000">7</option>
                <option value="10000">10</option>
                <option value="15000">15</option>
                <option value="20000">20</option>
            </select>
        </label>
    ;

    const infiniteState =
        <label className={s.params__label}>
            <span>Зациклен?</span>
            <input
                name="infiniteState"
                type="checkbox"
                onChange={sliderParamsHandler}
                checked={newsParams.infiniteState}/>
        </label>
    ;

    return (
        <div className={s.params}>
            <p className={s.params__title}>Параметры слайдера новостей:</p>
            <ul className={s.params__list}>
                <li className={s.params__item}>{newsToShow}</li>
                <li className={s.params__item}>{slideSpeed}</li>
                <li className={s.params__item}>{autoplayState}</li>
                <li className={s.params__item}>{autoplaySpeedState}</li>
                <li className={s.params__item}>{infiniteState}</li>
            </ul>
        </div>
    );

};

export default NewsSliderParams;
