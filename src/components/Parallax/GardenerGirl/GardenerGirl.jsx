import React, { Component } from 'react';
import Parallax from 'parallax-js';

import s from './GardenerGirl.module.scss';
import { ReactComponent as Girl } from "../../../assets/gardener/girl.svg";
import { ReactComponent as Bushes } from "../../../assets/gardener/bushes.svg";
import { ReactComponent as Tree } from "../../../assets/gardener/tree-plain.svg";
import { ReactComponent as Bg } from "../../../assets/gardener/bg.svg";

class GardenerGirl extends Component {
  componentDidMount() {
    this.parallax = new Parallax(this.scene);
  }

  componentWillUnmount() {
    this.parallax.disable();
  }

  render() {
    return (
      <figure className={s.GardenerGirl} ref={el => this.scene = el}>
        <Girl className={s.GardenerGirl__girl} data-depth="0.2"/>
        <Bushes className={s.GardenerGirl__bushes} data-depth="0.4"/>
        <Tree className={s.GardenerGirl__tree} data-depth="0.3"/>
        <Bg className={s.GardenerGirl__bg} data-depth="0.1"/>
      </figure>
    );
  }
}

export default GardenerGirl;
