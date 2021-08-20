import React, { useRef } from 'react';
import Parallax from 'parallax-js';

import s from './ParallaxGardener.module.scss';
import sprite from "../../../../assets/gardener/svgSprite.svg";

const scene = document.getElementById('scene');
console.log(scene);

const gardener = <figure className={s.Gardener} id="scene">
    <img className={s.Gardener__girl} src={sprite + "#girl"} alt="gardener" data-depth="0.2" />
    <img className={s.Gardener__bushes} src={sprite + "#bushes"} alt="gardener" data-depth="0.4" />
    <img className={s.Gardener__tree} src={sprite + "#tree-plain"} alt="gardener" data-depth="0.3" />
    <img className={s.Gardener__bg} src={sprite + "#bg"} alt="gardener" data-depth="0.5" />
</figure>;

const parallaxInstance = new Parallax(gardener);

const ParallaxGardener = () => {
    return (
        {gardener}
    );

};

export default ParallaxGardener;
