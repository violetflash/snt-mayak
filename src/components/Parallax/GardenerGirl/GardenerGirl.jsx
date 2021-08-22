import React, { Component } from 'react';
import Parallax from 'parallax-js';

import s from './GardenerGirl.module.scss';
import sprite from "../../../assets/gardener/svgSprite.svg";

class GardenerGirl extends Component {
    componentDidMount() {
        this.parallax = new Parallax(this.scene)
    }

    componentWillUnmount() {
        this.parallax.disable()
    }

    render() {
        return (
            <figure className={s.GardenerGirl} ref={el => this.scene = el}>
                <img className={s.GardenerGirl__girl} src={sprite + "#girl"} alt="gardener" data-depth="0" />
                <img className={s.GardenerGirl__bushes} src={sprite + "#bushes"} alt="gardener" data-depth="0.3" />
                <img className={s.GardenerGirl__tree} src={sprite + "#tree-plain"} alt="gardener" data-depth="0.2" />
                <img className={s.GardenerGirl__bg} src={sprite + "#bg"} alt="gardener" data-depth="0.5" />
            </figure>
        )
    }
}

export default GardenerGirl;