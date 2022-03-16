/* eslint-disable object-curly-newline */
import React, { useContext, useState } from 'react';

import './MintingAnimation.scss';

import classNames from 'classnames';

import shadow from '~assets/images/shadow.svg';

import popRoll from '~assets/images/poproll.png';

import { CharacterContext } from '~contexts';

import { useInterval } from '~hooks';

import { CorgiAnimOne, CorgiAnimTwo, CorgiAnimThree, CorgiAnimFour } from '~modules/common';

const MintingAnimation = () => {
  const { color, backgroundColor } = useContext(CharacterContext);

  const [animationCounter, setAnimationCounter] = useState(0);

  useInterval(() => {
    if (animationCounter <= 5) {
      setAnimationCounter(animationCounter + 1);
    } else {
      setAnimationCounter(0);
    }
  }, 1000);

  return (
    <div className='minting-animation' style={{ backgroundColor }}>
      <div className='minting-animation__box'>
      <img src={popRoll} alt='' />
        <div
          className={classNames('minting-animation__corgi', 'minting-animation__corgi--0', {
            'minting-animation__corgi--show': animationCounter === 0,
          })}
        >
          {/* <CorgiAnimOne color={color} /> */}
          <img src={popRoll} alt='' />
        </div>
        <div
          className={classNames('minting-animation__corgi', 'minting-animation__corgi--1', {
            'minting-animation__corgi--show': animationCounter === 1,
          })}
        >
          {/* <CorgiAnimOne color={color} /> */}
          <img src={popRoll} alt='' />
        </div>
        <div
          className={classNames('minting-animation__corgi', 'minting-animation__corgi--2', {
            'minting-animation__corgi--show': animationCounter === 2,
          })}
        >
          {/* <CorgiAnimOne color={color} /> */}
          <img src={popRoll} alt='' />
        </div>
        <div
          className={classNames('minting-animation__corgi', 'minting-animation__corgi--3', {
            'minting-animation__corgi--show': animationCounter >= 3,
          })}
        >
          {/* <CorgiAnimOne color={color} /> */}
          <img src={popRoll} alt='' />
        </div>
      </div>

      <div
        className={classNames('minting-animation__shadow', {
          'minting-animation__shadow--animate': animationCounter <= 3,
        })}
      >
        <img src={shadow} alt='' />
      </div>
    </div>
  );
};

export default MintingAnimation;
