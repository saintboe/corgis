import React, { useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';

import './CorgiSVG.scss';

import * as convertSvg from 'save-svg-as-png';

import { genRandomInt } from '~helpers/generators';

import COLORS from '~constants/Colors';

import { CorgiType } from '~types/CorgiTypes';

const fullWidth = 525;
const viewBoxHeight = 374;

const backPartMargin = 221;

const padding = 16;

const CorgiSVGPropTypes = {
  color: CorgiType.color.isRequired,
  sausage: PropTypes.number.isRequired,
};

const CorgiSVG = React.forwardRef(({ color, sausage }, ref) => {
  // add 1 point to remove stitch
  const sa = Number(sausage) + 1;

  const backPosition = Number(sausage) + backPartMargin;
  const viewBoxWidth = Number(sausage) + fullWidth;

  const tongueAnimDelay = genRandomInt(0, 500);
  const tailAnimDelay = genRandomInt(0, 500);

  const tongueAnimDuration = genRandomInt(150, 250);
  const tailAnimDuration = genRandomInt(450, 550);

  const svgRef = useRef();

  useImperativeHandle(ref, () => ({
    async convertToPng(name, backgroundColor) {
      if (svgRef && svgRef.current) {
        const config = {
          backgroundColor,
          height: viewBoxHeight + padding * 2,
          width: viewBoxWidth + padding * 2,
          left: -padding,
          top: -padding,
        };

        await convertSvg.saveSvgAsPng(svgRef.current, name, config);
        return convertSvg.svgAsPngUri(svgRef.current, config).then((uri) => uri);
      }

      return '';
    },
  }));

  return (
    <div className='corgi'>
      <svg
        ref={svgRef}
        width='100%'
        height='100%'
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xlink='http://www.w3.org/1999/xlink'
      >
        <defs>
          <radialGradient
            cx='50.007975%'
            cy='49.2029455%'
            fx='50.007975%'
            fy='49.2029455%'
            r='55.2359437%'
            gradientTransform='translate(0.500080,0.492029),scale(1.000000,0.815886),translate(-0.500080,-0.492029)'
            id='radialGradient-1'
          >
            <stop stopColor='#C8667B' offset='0%'></stop>
            <stop stopColor='#EE757B' offset='58%'></stop>
          </radialGradient>
          <linearGradient x1='50.0261575%' y1='99.9724236%' x2='50.0261575%' y2='8.96376211e-06%' id='linearGradient-2'>
            <stop stopColor='#E6E6E6' offset='0%'></stop>
            <stop stopColor={COLORS.WHITE} offset='100%'></stop>
          </linearGradient>
          <linearGradient x1='50%' y1='100%' x2='50%' y2='0%' id='linearGradient-3'>
            <stop stopColor={COLORS.BLACK} offset='0%'></stop>
            <stop stopColor={COLORS.BLACK} stopOpacity='0' offset='100%'></stop>
          </linearGradient>
          <linearGradient x1='0.0431406385%' y1='50%' x2='100%' y2='50%' id='linearGradient-4'>
            <stop stopColor={COLORS.WHITE} offset='0%'></stop>
            <stop stopColor={COLORS.WHITE} stopOpacity='0' offset='100%'></stop>
          </linearGradient>
          <linearGradient x1='-7.99941342e-15%' y1='50.005739%' x2='100.000726%' y2='50.005739%' id='linearGradient-5'>
            <stop stopColor={COLORS.WHITE} offset='0%'></stop>
            <stop stopColor={COLORS.BLACK} offset='100%'></stop>
          </linearGradient>
          <linearGradient x1='25.7966388%' y1='75.4355962%' x2='55.070385%' y2='24.3789996%' id='linearGradient-6'>
            <stop stopColor={COLORS.WHITE} offset='0%'></stop>
            <stop stopColor={COLORS.WHITE} stopOpacity='0' offset='100%'></stop>
          </linearGradient>
          <linearGradient x1='40.1617814%' y1='82.6951545%' x2='72.4163957%' y2='24.6788457%' id='linearGradient-7'>
            <stop stopColor={COLORS.WHITE} offset='0%'></stop>
            <stop stopColor={COLORS.WHITE} stopOpacity='0' offset='100%'></stop>
          </linearGradient>
        </defs>

        <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <g id='Group-12' fillRule='nonzero'>
            
            <g id='corgi-back' transform={`translate(${backPosition}, 18.5)`}>
              <path d="M278.2,81.2c-0.8,0.6-1.6,1.2-2.6,1.6c-1.8,0.8-3.7,1.1-5.6,1.2c-2.4,0-4.7-0.1-6.9-0.9c-3.9-1.4-6.6-4-7.9-7.9
		c-1.5-4.3-1.1-8.5,1-12.5c1.4-2.6,3.5-4.4,6.2-5.5c4.9-2,9.8-1.9,14.6,0.2c3.6,1.6,5.6,4.5,6.5,8.2c0,0.1,0,0.1,0,0.2
		c-0.2,0.2-0.5,0.1-0.7,0.1c-1.6,0-3.3,0-4.9,0c-0.4,0-0.6-0.1-0.8-0.5c-1-2.3-2.8-3.6-5.3-3.9c-2-0.3-4.1-0.3-6,0.5
		c-2.2,0.9-3.7,2.5-4.4,4.7c-0.7,2.1-0.8,4.1-0.2,6.2c0.7,2.5,2.3,4.3,4.8,5.1c2.9,1,5.8,0.9,8.6-0.6c1.6-0.9,2.8-2.2,3.4-4.1
		c-0.7,0-1.3,0-1.8,0c-1.9,0-3.7,0-5.6,0c-0.9,0-0.9,0-0.9-0.8c0-1.2,0-2.4,0-3.6c0-0.5,0.1-0.7,0.7-0.7c1.2,0,2.3,0,3.5,0
		c3.1,0,6.2,0,9.3,0c0.9,0,0.9-0.1,0.9,0.9c0,4.5,0,9.1,0,13.6c0,0.9,0,0.9-0.9,0.9c-1.2,0-2.3,0-3.5,0c-0.4,0-0.6-0.1-0.7-0.5
		C278.5,82.3,278.5,81.7,278.2,81.2z"/>
	<path d="M174.5,70.2c1.9,1.7,2.2,4,2.3,6.2c0.1,1,0.1,1.9,0.3,2.8c0.2,1.3,0.7,2.4,1.6,3.3c0.2,0.2,0.4,0.4,0.5,0.7
		c-0.2,0.2-0.5,0.1-0.8,0.1c-1.7,0-3.4,0-5.2,0c-0.5,0-0.9-0.2-1.2-0.6c-0.8-1.3-1.1-2.7-1.1-4.2c0-1.1-0.1-2.3-0.4-3.4
		c-0.5-1.6-1.4-2.4-3.1-2.4c-0.9,0-1.8,0-2.7,0c-1.9,0-3.8,0-5.7,0c-0.8,0-0.8,0-0.8,0.8c0,2.9,0,5.8,0,8.7c0,1.2,0.1,1.1-1.1,1.1
		c-1.3,0-2.6,0-4,0c-1.3,0-1.2,0.1-1.2-1.2c0-3.2,0-6.3,0-9.5c0-5.1,0-10.3,0-15.4c0-1.1-0.2-1,1.1-1c5.6,0,11.2,0,16.8,0
		c4.8,0,7.8,3.5,7.6,8.3C177.2,66.9,176.3,68.7,174.5,70.2z"/>
	<path d="M195.5,83.9c-2.4,0.1-4.8-0.3-7.1-1.1c-4.7-1.8-7.4-5.2-8.2-10.1c-0.5-2.9-0.3-5.7,0.8-8.5c1.5-3.7,4.1-6.2,7.9-7.4
		c4.8-1.5,9.6-1.5,14.3,0.3c4,1.6,6.5,4.6,7.6,8.8c0.8,3.1,0.7,6.2-0.4,9.2c-1.3,3.8-3.9,6.4-7.7,7.8
		C200.3,83.6,197.9,84,195.5,83.9z"/>
	<path d="M214.2,69.9c0-4.2,0-8.4,0-12.6c0-1-0.1-0.9,0.9-0.9c4.8,0,9.7-0.1,14.5,0c3.8,0.1,7.1,1.5,9.3,4.7c1.1,1.7,1.7,3.6,2,5.5
		c0.4,2.7,0.3,5.4-0.5,8c-1.3,4.7-4.2,7.6-9,8.5c-0.9,0.2-1.7,0.2-2.6,0.2c-4.5,0-9,0-13.5,0c-1,0-1,0.2-1-1
		C214.2,78.2,214.2,74.1,214.2,69.9z"/>
	<path d="M86.9,69.8c0-4.2,0-8.4,0-12.6c0-0.8,0-0.8,0.8-0.8c7.2,0,14.4,0,21.5,0c0.8,0,0.9,0,0.9,0.8c0,1.3,0,2.6,0,4
		c0,0.4-0.1,0.6-0.6,0.6c-0.7,0-1.3,0-2,0c-4.5,0-8.9,0-13.4,0c-1,0-1-0.1-1,1c0,1,0,2,0,3c0,1.2-0.1,1.1,1,1.1c4.1,0,8.1,0,12.2,0
		c0.8,0,1.6,0,2.4,0c0.5,0,0.6,0.1,0.6,0.6c0,1.4,0,2.7,0,4.1c0,0.6-0.2,0.8-0.7,0.7c-2.7,0-5.5,0-8.2,0c-2.2,0-4.3,0-6.5,0
		c-0.9,0-0.8-0.1-0.8,0.8c0,1.2,0,2.5,0,3.7c0,1.3-0.1,1.1,1.1,1.1c4.9,0,9.7,0,14.6,0c1.4,0,1.4,0,1.4,1.4c0,1.1,0,2.3,0,3.4
		c0,0.5-0.1,0.7-0.6,0.6c-0.1,0-0.1,0-0.2,0c-7.3,0-14.5,0-21.8,0c-0.9,0-0.9,0-0.9-0.9C86.9,78.3,86.9,74.1,86.9,69.8z"/>
	<path d="M82.4,70c0,4.2,0,8.4,0,12.5c0,0.9,0,0.9-0.9,0.9c-1.5,0-3.1,0-4.6,0c-0.8,0-0.8,0-0.8-0.8c0-3.2,0-6.4,0-9.7
		c0-0.3,0-0.5,0-0.8c0-0.3-0.2-0.5-0.5-0.4c-0.1,0-0.3,0-0.4,0c-4.5,0-9,0-13.5,0c-0.9,0-0.8-0.1-0.8,0.8c0,3.3,0,6.5,0,9.8
		c0,1.1,0.1,1-1.1,1c-1.4,0-2.9,0-4.3,0c-0.9,0-0.9,0-0.9-1c0-5.9,0-11.7,0-17.6c0-2.6,0-5.1,0-7.7c0-0.8,0-0.8,0.8-0.8
		c1.6,0,3.2,0,4.7,0c0.8,0,0.8,0,0.8,0.9c0,2.7,0,5.4,0,8.1c0,0.9,0,0.9,0.9,0.9c4.5,0,9,0,13.5,0c0.8,0,0.8,0,0.8-0.8
		c0-2.7,0-5.4,0-8.1c0-0.9,0-0.9,0.9-0.9c1.5,0,3.1,0,4.6,0c0.8,0,0.8,0,0.8,0.9C82.4,61.5,82.4,65.7,82.4,70z"/>
	<path d="M124.6,69.9c0-4.2,0-8.4,0-12.5c0-1.1-0.1-1,0.9-1c4.9,0,9.8,0,14.7,0c1.7,0,3.3,0.4,4.9,1.1c2.4,1.2,3.6,3.3,3.9,5.8
		c0.2,2.1,0,4.2-1.1,6c-1.4,2.4-3.7,3.5-6.4,4c-2.2,0.3-4.4,0.1-6.6,0.2c-1.1,0-2.2,0-3.3,0c-0.7,0-0.8,0-0.8,0.8c0,2.5,0,5.1,0,7.6
		c0,0.1,0,0.3,0,0.4c0,1.2,0,1.1-1.1,1.1c-1.5,0-2.9,0-4.4,0c-0.8,0-0.8,0-0.8-0.8C124.6,78.4,124.6,74.1,124.6,69.9z"/>
	<path d="M286,56.3c2,0,3.9,0,5.7,0c0.7,0,1.5-0.2,2.2,0.1c0.7,0.2,0.9,1.1,1.3,1.7c2,2.8,3.9,5.6,5.9,8.5c0.7-0.7,1.2-1.6,1.8-2.3
		c1.7-2.4,3.4-4.9,5.2-7.4c0.2-0.3,0.3-0.6,0.8-0.6c2.4,0,4.7,0,7.2,0c-0.1,0.5-0.5,0.8-0.7,1.1c-3.5,4.6-6.9,9.2-10.4,13.9
		c-0.4,0.6-0.6,1.2-0.6,1.9c0,3.1,0,6.2,0,9.3c0,0.8,0,0.8-0.9,0.8c-1.5,0-3,0-4.5,0c-0.9,0-0.9,0-0.9-0.9c0-3,0-6,0-9
		c0-0.8-0.2-1.4-0.7-2.1C293.5,66.5,289.8,61.5,286,56.3z"/>
	<path d="M40.1,56.3c3.7,0,7.5,0,11.2,0c1.1,0,0.9,0,0.9,1c0,1.2,0,2.3,0,3.5c0,0.9,0,0.9-0.9,0.9c-2.4,0-4.8,0-7.1,0
		c-0.9,0-1-0.1-1,0.9c0,6.5,0,13.1,0,19.6c0,1.3,0.1,1.2-1.2,1.2c-1.3,0-2.6,0-3.8,0c-1.2,0-1.1,0.2-1.1-1.1c0-1.9,0-3.8,0-5.7
		c0-4.6,0-9.2,0-13.7c0-1.3,0.1-1.1-1.2-1.2c-2.3,0-4.7,0-7,0c-0.8,0-0.8,0-0.8-0.8c0-1.2,0-2.5,0-3.7c0-0.9-0.1-0.8,0.8-0.8
		C32.6,56.4,36.4,56.3,40.1,56.3z"/>
	<path d="M247.3,52.4c0.8,1.2,1.6,2.2,2.6,3c0.2,0.2,0.3,0.3,0.2,0.6c0,0.2,0,0.4,0,0.7c0,8.5,0,17.1,0,25.6c0,1.4,0.1,1.2-1.2,1.2
		c-1.3,0-2.6,0-4,0c-1.1,0-1,0.1-1-1.1c0-5.8,0-11.6,0-17.4c0-2.7,0-5.4,0-8.1c0-0.6,0.1-1,0.6-1.3
		C245.6,54.7,246.4,53.6,247.3,52.4z"/>
	<path class="st0" d="M255.2,37.6c1.8,0.3,3.3,1.2,4.5,2.7c2,2.5,1.1,6.5-1.8,7.8c-0.5,0.2-0.9,0.5-1.1,1c-0.2,0.5-0.7,0.9-1.2,1.1
		c-1.9,1-4.3,1.1-6-0.8c-1.4-1.5-2.1-3.2-2.2-5.2c0-1.4,0.1-2.8,0.3-4.3c0.1-0.8,0.2-1.6-0.3-2.3c0.1-0.1,0.2-0.1,0.3-0.2
		c1.2,0.4,2.4,0.1,3.6-0.1c0.3,0,0.6-0.1,0.8-0.2c0.7-0.1,1.4-0.1,2.2,0C254.7,37.3,254.9,37.5,255.2,37.6z"/>
	<path class="st1" d="M254.4,37.5c-0.7,0-1.5,0-2.2,0c-0.3,0-0.7,0-1,0c-1.1-0.1-2.3-0.4-3.4-0.1c-0.1,0-0.2-0.1-0.3-0.2
		c0.5-0.7,0.4-1.5,0.3-2.3c-0.3-1.9-0.5-3.8-0.1-5.8c0.4-2,1.5-3.5,3.2-4.7c1.5-1,5.1-0.6,6,1.4c0.2,0.4,0.5,0.6,1,0.8
		c2.9,1.4,3.9,5.3,1.9,7.8c-1.2,1.5-2.7,2.4-4.6,2.8C254.9,37.4,254.7,37.6,254.4,37.5z"/>
	<path class="st2" d="M239.4,37.3c-1.7-0.3-3.2-1.1-4.3-2.5c-2.3-2.7-1.4-6.6,1.8-8.1c0.4-0.2,0.7-0.4,0.9-0.8
		c0.8-1.8,4.6-2.8,6.5-1.1c1.6,1.4,2.8,3.1,2.9,5.3c0.1,1.8,0,3.6-0.3,5.4c-0.1,0.6,0,1.1,0.3,1.5c0.1,0.2-0.1,0.3-0.2,0.4
		c-1.1-0.2-2.2-0.1-3.2,0.1c-0.2,0-0.3,0-0.5,0c-0.3,0-0.6,0.1-0.8,0.2c-0.7,0.1-1.4,0.1-2.1,0C239.8,37.6,239.6,37.5,239.4,37.3z"
		/>
	<path class="st3" d="M247.1,37.9c-0.3,0.5-0.4,1-0.3,1.6c0.3,1.8,0.4,3.6,0.3,5.5c-0.1,2.2-1.2,3.9-2.9,5.2c-2,1.5-5.1,0.9-6.4-1.2
		c-0.2-0.4-0.5-0.6-0.9-0.8c-3-1.4-3.9-5.1-2-7.8c1.1-1.5,2.6-2.4,4.5-2.8c0.2-0.2,0.5-0.2,0.7-0.1c0.7,0,1.5,0,2.2,0
		c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.5,0,0.7,0c1.1,0.2,2.3,0.3,3.5,0.1C247.1,37.7,247.1,37.8,247.1,37.9z"/>
	<path class="st4" d="M240,37.7c-0.2,0-0.4,0-0.7,0c0-0.1,0-0.2,0.1-0.4c0.3-0.1,0.5,0,0.7,0.1C240.1,37.5,240.1,37.6,240,37.7z"/>
	<path class="st5" d="M254.4,37.5c0.2-0.1,0.5-0.2,0.7-0.1c0,0.1,0,0.2,0,0.3C254.9,37.7,254.6,37.7,254.4,37.5z"/>
	<path class="st6" d="M247.1,37.9c0-0.1,0-0.2,0-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.1,0-0.1c0.1,0,0.2,0,0.3,0
		c0.1,0,0.3,0,0.4,0.1c0.1,0.1,0.1,0.2,0,0.2l-0.1,0c0,0-0.1,0-0.1,0C247.3,37.7,247.2,37.8,247.1,37.9z"/>
	<path class="st7" d="M247.3,37.4c-0.1,0-0.2,0-0.3,0.1c-0.2,0-0.3-0.1-0.2-0.3c0.1-0.1,0.2-0.2,0.2-0.2c0.1,0.1,0.2,0.1,0.2,0.2
		C247.3,37.3,247.3,37.3,247.3,37.4C247.3,37.4,247.3,37.4,247.3,37.4z"/>
	<path class="st8" d="M247.3,37.4c0-0.1,0-0.1,0-0.2c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0.1,0.1,0,0.1,0,0.2
		C247.5,37.5,247.4,37.5,247.3,37.4z"/>
	<path class="st9" d="M163.3,67.4c-1.5,0-3,0-4.5,0c-0.5,0-0.7-0.1-0.7-0.7c0-1.5,0-2.9,0-4.4c0-0.6,0.2-0.7,0.7-0.7
		c3,0,5.9,0,8.9,0c0.4,0,0.9,0.1,1.3,0.2c1.2,0.3,2.1,1.4,2.1,2.6c0,1.1-0.8,2.2-2,2.6c-0.6,0.2-1.1,0.2-1.7,0.2
		C166,67.4,164.6,67.4,163.3,67.4z"/>
	<path class="st9" d="M204.8,69.8c0.1,2.2-0.5,4.2-2,5.9c-1.2,1.4-2.7,2.2-4.5,2.6c-2.7,0.6-5.3,0.4-7.8-0.8
		c-2.6-1.3-3.9-3.5-4.3-6.3c-0.2-1.3-0.1-2.5,0.2-3.8c0.6-2.6,2.2-4.4,4.7-5.4c3.1-1.3,6.2-1.2,9.2,0.2c2.9,1.4,4.4,3.9,4.5,7.1
		C204.8,69.4,204.8,69.6,204.8,69.8z"/>
	<path class="st9" d="M220.4,69.7c0-2.4,0-4.8,0-7.1c0-0.9,0-0.9,0.9-0.9c2.2,0,4.4-0.1,6.6,0c1.9,0.1,3.7,0.5,5.1,2.1
		c0.7,0.8,1.1,1.6,1.3,2.6c0.6,2.5,0.6,5.1-0.3,7.6c-0.9,2.7-2.8,3.8-5.5,3.9c-2.5,0.1-5,0-7.5,0c-0.7,0-0.8,0-0.8-0.8
		C220.4,74.6,220.4,72.2,220.4,69.7z"/>
	<path class="st9" d="M135.7,61.7c1.2,0,2.5,0,3.7,0c0.5,0,1,0.1,1.5,0.2c1.1,0.3,1.8,1.2,1.9,2.4c0.2,2.6-1.4,3.6-3.5,3.6
		c-2.6,0.1-5.2,0-7.8,0c-0.5,0-0.6-0.2-0.6-0.6c0-1.7,0-3.4,0-5c0-0.5,0.2-0.6,0.6-0.6C132.9,61.7,134.3,61.7,135.7,61.7z"/>
	<path class="st10" d="M247.7,37.5c0-0.1,0-0.1,0-0.2c1.2-0.7,2.3-0.3,3.5,0c0.2,0.1,0.3,0.2,0.2,0.4c-0.4,0.1-0.7,0.1-1.1,0.2
		c-0.9,0.3-1.8,0.2-2.6-0.2C247.7,37.6,247.7,37.5,247.7,37.5z"/>
	<path class="st11" d="M251.4,37.6c-0.1-0.1-0.1-0.2-0.2-0.4c0.4,0,0.7,0,1,0.2C252,37.7,251.7,37.7,251.4,37.6z"/>
	<path class="st12" d="M246.8,37.2c0.1,0.1,0.1,0.2,0.2,0.3c0,0,0,0.1,0,0.1c-1.2,0.7-2.3,0.4-3.5,0c-0.1-0.1-0.1-0.3,0-0.4
		C244.6,37,245.7,36.6,246.8,37.2z"/>
	<path class="st13" d="M240,37.7c0-0.1,0.1-0.2,0.1-0.2c0.8,0,1.5,0,2.3,0c0.1,0,0.1,0.1,0.1,0.1c0,0.1,0,0.1,0,0.1
		C241.6,37.7,240.8,37.7,240,37.7z"/>
	<path class="st14" d="M243.5,37.3c0,0.1,0,0.3,0,0.4c-0.2,0-0.4,0-0.6,0c-0.1-0.2,0-0.3,0.1-0.3C243.2,37.3,243.3,37.3,243.5,37.3z
		"/>
	<path class="st15" d="M243,37.3c0,0.1-0.1,0.2-0.1,0.3c-0.2,0-0.3,0-0.5,0c0-0.1,0-0.1-0.1-0.2C242.5,37.3,242.8,37.3,243,37.3z"/>
            </g>

            <g id='corgi-front' transform='translate(0.000000, 0.000000)'>
            <path d="M278.2,81.2c-0.8,0.6-1.6,1.2-2.6,1.6c-1.8,0.8-3.7,1.1-5.6,1.2c-2.4,0-4.7-0.1-6.9-0.9c-3.9-1.4-6.6-4-7.9-7.9
		c-1.5-4.3-1.1-8.5,1-12.5c1.4-2.6,3.5-4.4,6.2-5.5c4.9-2,9.8-1.9,14.6,0.2c3.6,1.6,5.6,4.5,6.5,8.2c0,0.1,0,0.1,0,0.2
		c-0.2,0.2-0.5,0.1-0.7,0.1c-1.6,0-3.3,0-4.9,0c-0.4,0-0.6-0.1-0.8-0.5c-1-2.3-2.8-3.6-5.3-3.9c-2-0.3-4.1-0.3-6,0.5
		c-2.2,0.9-3.7,2.5-4.4,4.7c-0.7,2.1-0.8,4.1-0.2,6.2c0.7,2.5,2.3,4.3,4.8,5.1c2.9,1,5.8,0.9,8.6-0.6c1.6-0.9,2.8-2.2,3.4-4.1
		c-0.7,0-1.3,0-1.8,0c-1.9,0-3.7,0-5.6,0c-0.9,0-0.9,0-0.9-0.8c0-1.2,0-2.4,0-3.6c0-0.5,0.1-0.7,0.7-0.7c1.2,0,2.3,0,3.5,0
		c3.1,0,6.2,0,9.3,0c0.9,0,0.9-0.1,0.9,0.9c0,4.5,0,9.1,0,13.6c0,0.9,0,0.9-0.9,0.9c-1.2,0-2.3,0-3.5,0c-0.4,0-0.6-0.1-0.7-0.5
		C278.5,82.3,278.5,81.7,278.2,81.2z"/>
	<path d="M174.5,70.2c1.9,1.7,2.2,4,2.3,6.2c0.1,1,0.1,1.9,0.3,2.8c0.2,1.3,0.7,2.4,1.6,3.3c0.2,0.2,0.4,0.4,0.5,0.7
		c-0.2,0.2-0.5,0.1-0.8,0.1c-1.7,0-3.4,0-5.2,0c-0.5,0-0.9-0.2-1.2-0.6c-0.8-1.3-1.1-2.7-1.1-4.2c0-1.1-0.1-2.3-0.4-3.4
		c-0.5-1.6-1.4-2.4-3.1-2.4c-0.9,0-1.8,0-2.7,0c-1.9,0-3.8,0-5.7,0c-0.8,0-0.8,0-0.8,0.8c0,2.9,0,5.8,0,8.7c0,1.2,0.1,1.1-1.1,1.1
		c-1.3,0-2.6,0-4,0c-1.3,0-1.2,0.1-1.2-1.2c0-3.2,0-6.3,0-9.5c0-5.1,0-10.3,0-15.4c0-1.1-0.2-1,1.1-1c5.6,0,11.2,0,16.8,0
		c4.8,0,7.8,3.5,7.6,8.3C177.2,66.9,176.3,68.7,174.5,70.2z"/>
	<path d="M195.5,83.9c-2.4,0.1-4.8-0.3-7.1-1.1c-4.7-1.8-7.4-5.2-8.2-10.1c-0.5-2.9-0.3-5.7,0.8-8.5c1.5-3.7,4.1-6.2,7.9-7.4
		c4.8-1.5,9.6-1.5,14.3,0.3c4,1.6,6.5,4.6,7.6,8.8c0.8,3.1,0.7,6.2-0.4,9.2c-1.3,3.8-3.9,6.4-7.7,7.8
		C200.3,83.6,197.9,84,195.5,83.9z"/>
	<path d="M214.2,69.9c0-4.2,0-8.4,0-12.6c0-1-0.1-0.9,0.9-0.9c4.8,0,9.7-0.1,14.5,0c3.8,0.1,7.1,1.5,9.3,4.7c1.1,1.7,1.7,3.6,2,5.5
		c0.4,2.7,0.3,5.4-0.5,8c-1.3,4.7-4.2,7.6-9,8.5c-0.9,0.2-1.7,0.2-2.6,0.2c-4.5,0-9,0-13.5,0c-1,0-1,0.2-1-1
		C214.2,78.2,214.2,74.1,214.2,69.9z"/>
	<path d="M86.9,69.8c0-4.2,0-8.4,0-12.6c0-0.8,0-0.8,0.8-0.8c7.2,0,14.4,0,21.5,0c0.8,0,0.9,0,0.9,0.8c0,1.3,0,2.6,0,4
		c0,0.4-0.1,0.6-0.6,0.6c-0.7,0-1.3,0-2,0c-4.5,0-8.9,0-13.4,0c-1,0-1-0.1-1,1c0,1,0,2,0,3c0,1.2-0.1,1.1,1,1.1c4.1,0,8.1,0,12.2,0
		c0.8,0,1.6,0,2.4,0c0.5,0,0.6,0.1,0.6,0.6c0,1.4,0,2.7,0,4.1c0,0.6-0.2,0.8-0.7,0.7c-2.7,0-5.5,0-8.2,0c-2.2,0-4.3,0-6.5,0
		c-0.9,0-0.8-0.1-0.8,0.8c0,1.2,0,2.5,0,3.7c0,1.3-0.1,1.1,1.1,1.1c4.9,0,9.7,0,14.6,0c1.4,0,1.4,0,1.4,1.4c0,1.1,0,2.3,0,3.4
		c0,0.5-0.1,0.7-0.6,0.6c-0.1,0-0.1,0-0.2,0c-7.3,0-14.5,0-21.8,0c-0.9,0-0.9,0-0.9-0.9C86.9,78.3,86.9,74.1,86.9,69.8z"/>
	<path d="M82.4,70c0,4.2,0,8.4,0,12.5c0,0.9,0,0.9-0.9,0.9c-1.5,0-3.1,0-4.6,0c-0.8,0-0.8,0-0.8-0.8c0-3.2,0-6.4,0-9.7
		c0-0.3,0-0.5,0-0.8c0-0.3-0.2-0.5-0.5-0.4c-0.1,0-0.3,0-0.4,0c-4.5,0-9,0-13.5,0c-0.9,0-0.8-0.1-0.8,0.8c0,3.3,0,6.5,0,9.8
		c0,1.1,0.1,1-1.1,1c-1.4,0-2.9,0-4.3,0c-0.9,0-0.9,0-0.9-1c0-5.9,0-11.7,0-17.6c0-2.6,0-5.1,0-7.7c0-0.8,0-0.8,0.8-0.8
		c1.6,0,3.2,0,4.7,0c0.8,0,0.8,0,0.8,0.9c0,2.7,0,5.4,0,8.1c0,0.9,0,0.9,0.9,0.9c4.5,0,9,0,13.5,0c0.8,0,0.8,0,0.8-0.8
		c0-2.7,0-5.4,0-8.1c0-0.9,0-0.9,0.9-0.9c1.5,0,3.1,0,4.6,0c0.8,0,0.8,0,0.8,0.9C82.4,61.5,82.4,65.7,82.4,70z"/>
	<path d="M124.6,69.9c0-4.2,0-8.4,0-12.5c0-1.1-0.1-1,0.9-1c4.9,0,9.8,0,14.7,0c1.7,0,3.3,0.4,4.9,1.1c2.4,1.2,3.6,3.3,3.9,5.8
		c0.2,2.1,0,4.2-1.1,6c-1.4,2.4-3.7,3.5-6.4,4c-2.2,0.3-4.4,0.1-6.6,0.2c-1.1,0-2.2,0-3.3,0c-0.7,0-0.8,0-0.8,0.8c0,2.5,0,5.1,0,7.6
		c0,0.1,0,0.3,0,0.4c0,1.2,0,1.1-1.1,1.1c-1.5,0-2.9,0-4.4,0c-0.8,0-0.8,0-0.8-0.8C124.6,78.4,124.6,74.1,124.6,69.9z"/>
	<path d="M286,56.3c2,0,3.9,0,5.7,0c0.7,0,1.5-0.2,2.2,0.1c0.7,0.2,0.9,1.1,1.3,1.7c2,2.8,3.9,5.6,5.9,8.5c0.7-0.7,1.2-1.6,1.8-2.3
		c1.7-2.4,3.4-4.9,5.2-7.4c0.2-0.3,0.3-0.6,0.8-0.6c2.4,0,4.7,0,7.2,0c-0.1,0.5-0.5,0.8-0.7,1.1c-3.5,4.6-6.9,9.2-10.4,13.9
		c-0.4,0.6-0.6,1.2-0.6,1.9c0,3.1,0,6.2,0,9.3c0,0.8,0,0.8-0.9,0.8c-1.5,0-3,0-4.5,0c-0.9,0-0.9,0-0.9-0.9c0-3,0-6,0-9
		c0-0.8-0.2-1.4-0.7-2.1C293.5,66.5,289.8,61.5,286,56.3z"/>
	<path d="M40.1,56.3c3.7,0,7.5,0,11.2,0c1.1,0,0.9,0,0.9,1c0,1.2,0,2.3,0,3.5c0,0.9,0,0.9-0.9,0.9c-2.4,0-4.8,0-7.1,0
		c-0.9,0-1-0.1-1,0.9c0,6.5,0,13.1,0,19.6c0,1.3,0.1,1.2-1.2,1.2c-1.3,0-2.6,0-3.8,0c-1.2,0-1.1,0.2-1.1-1.1c0-1.9,0-3.8,0-5.7
		c0-4.6,0-9.2,0-13.7c0-1.3,0.1-1.1-1.2-1.2c-2.3,0-4.7,0-7,0c-0.8,0-0.8,0-0.8-0.8c0-1.2,0-2.5,0-3.7c0-0.9-0.1-0.8,0.8-0.8
		C32.6,56.4,36.4,56.3,40.1,56.3z"/>
	<path d="M247.3,52.4c0.8,1.2,1.6,2.2,2.6,3c0.2,0.2,0.3,0.3,0.2,0.6c0,0.2,0,0.4,0,0.7c0,8.5,0,17.1,0,25.6c0,1.4,0.1,1.2-1.2,1.2
		c-1.3,0-2.6,0-4,0c-1.1,0-1,0.1-1-1.1c0-5.8,0-11.6,0-17.4c0-2.7,0-5.4,0-8.1c0-0.6,0.1-1,0.6-1.3
		C245.6,54.7,246.4,53.6,247.3,52.4z"/>
	<path class="st0" d="M255.2,37.6c1.8,0.3,3.3,1.2,4.5,2.7c2,2.5,1.1,6.5-1.8,7.8c-0.5,0.2-0.9,0.5-1.1,1c-0.2,0.5-0.7,0.9-1.2,1.1
		c-1.9,1-4.3,1.1-6-0.8c-1.4-1.5-2.1-3.2-2.2-5.2c0-1.4,0.1-2.8,0.3-4.3c0.1-0.8,0.2-1.6-0.3-2.3c0.1-0.1,0.2-0.1,0.3-0.2
		c1.2,0.4,2.4,0.1,3.6-0.1c0.3,0,0.6-0.1,0.8-0.2c0.7-0.1,1.4-0.1,2.2,0C254.7,37.3,254.9,37.5,255.2,37.6z"/>
	<path class="st1" d="M254.4,37.5c-0.7,0-1.5,0-2.2,0c-0.3,0-0.7,0-1,0c-1.1-0.1-2.3-0.4-3.4-0.1c-0.1,0-0.2-0.1-0.3-0.2
		c0.5-0.7,0.4-1.5,0.3-2.3c-0.3-1.9-0.5-3.8-0.1-5.8c0.4-2,1.5-3.5,3.2-4.7c1.5-1,5.1-0.6,6,1.4c0.2,0.4,0.5,0.6,1,0.8
		c2.9,1.4,3.9,5.3,1.9,7.8c-1.2,1.5-2.7,2.4-4.6,2.8C254.9,37.4,254.7,37.6,254.4,37.5z"/>
	<path class="st2" d="M239.4,37.3c-1.7-0.3-3.2-1.1-4.3-2.5c-2.3-2.7-1.4-6.6,1.8-8.1c0.4-0.2,0.7-0.4,0.9-0.8
		c0.8-1.8,4.6-2.8,6.5-1.1c1.6,1.4,2.8,3.1,2.9,5.3c0.1,1.8,0,3.6-0.3,5.4c-0.1,0.6,0,1.1,0.3,1.5c0.1,0.2-0.1,0.3-0.2,0.4
		c-1.1-0.2-2.2-0.1-3.2,0.1c-0.2,0-0.3,0-0.5,0c-0.3,0-0.6,0.1-0.8,0.2c-0.7,0.1-1.4,0.1-2.1,0C239.8,37.6,239.6,37.5,239.4,37.3z"
		/>
	<path class="st3" d="M247.1,37.9c-0.3,0.5-0.4,1-0.3,1.6c0.3,1.8,0.4,3.6,0.3,5.5c-0.1,2.2-1.2,3.9-2.9,5.2c-2,1.5-5.1,0.9-6.4-1.2
		c-0.2-0.4-0.5-0.6-0.9-0.8c-3-1.4-3.9-5.1-2-7.8c1.1-1.5,2.6-2.4,4.5-2.8c0.2-0.2,0.5-0.2,0.7-0.1c0.7,0,1.5,0,2.2,0
		c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.5,0,0.7,0c1.1,0.2,2.3,0.3,3.5,0.1C247.1,37.7,247.1,37.8,247.1,37.9z"/>
	<path class="st4" d="M240,37.7c-0.2,0-0.4,0-0.7,0c0-0.1,0-0.2,0.1-0.4c0.3-0.1,0.5,0,0.7,0.1C240.1,37.5,240.1,37.6,240,37.7z"/>
	<path class="st5" d="M254.4,37.5c0.2-0.1,0.5-0.2,0.7-0.1c0,0.1,0,0.2,0,0.3C254.9,37.7,254.6,37.7,254.4,37.5z"/>
	<path class="st6" d="M247.1,37.9c0-0.1,0-0.2,0-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.1,0-0.1c0.1,0,0.2,0,0.3,0
		c0.1,0,0.3,0,0.4,0.1c0.1,0.1,0.1,0.2,0,0.2l-0.1,0c0,0-0.1,0-0.1,0C247.3,37.7,247.2,37.8,247.1,37.9z"/>
	<path class="st7" d="M247.3,37.4c-0.1,0-0.2,0-0.3,0.1c-0.2,0-0.3-0.1-0.2-0.3c0.1-0.1,0.2-0.2,0.2-0.2c0.1,0.1,0.2,0.1,0.2,0.2
		C247.3,37.3,247.3,37.3,247.3,37.4C247.3,37.4,247.3,37.4,247.3,37.4z"/>
	<path class="st8" d="M247.3,37.4c0-0.1,0-0.1,0-0.2c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0.1,0.1,0,0.1,0,0.2
		C247.5,37.5,247.4,37.5,247.3,37.4z"/>
	<path class="st9" d="M163.3,67.4c-1.5,0-3,0-4.5,0c-0.5,0-0.7-0.1-0.7-0.7c0-1.5,0-2.9,0-4.4c0-0.6,0.2-0.7,0.7-0.7
		c3,0,5.9,0,8.9,0c0.4,0,0.9,0.1,1.3,0.2c1.2,0.3,2.1,1.4,2.1,2.6c0,1.1-0.8,2.2-2,2.6c-0.6,0.2-1.1,0.2-1.7,0.2
		C166,67.4,164.6,67.4,163.3,67.4z"/>
	<path class="st9" d="M204.8,69.8c0.1,2.2-0.5,4.2-2,5.9c-1.2,1.4-2.7,2.2-4.5,2.6c-2.7,0.6-5.3,0.4-7.8-0.8
		c-2.6-1.3-3.9-3.5-4.3-6.3c-0.2-1.3-0.1-2.5,0.2-3.8c0.6-2.6,2.2-4.4,4.7-5.4c3.1-1.3,6.2-1.2,9.2,0.2c2.9,1.4,4.4,3.9,4.5,7.1
		C204.8,69.4,204.8,69.6,204.8,69.8z"/>
	<path class="st9" d="M220.4,69.7c0-2.4,0-4.8,0-7.1c0-0.9,0-0.9,0.9-0.9c2.2,0,4.4-0.1,6.6,0c1.9,0.1,3.7,0.5,5.1,2.1
		c0.7,0.8,1.1,1.6,1.3,2.6c0.6,2.5,0.6,5.1-0.3,7.6c-0.9,2.7-2.8,3.8-5.5,3.9c-2.5,0.1-5,0-7.5,0c-0.7,0-0.8,0-0.8-0.8
		C220.4,74.6,220.4,72.2,220.4,69.7z"/>
	<path class="st9" d="M135.7,61.7c1.2,0,2.5,0,3.7,0c0.5,0,1,0.1,1.5,0.2c1.1,0.3,1.8,1.2,1.9,2.4c0.2,2.6-1.4,3.6-3.5,3.6
		c-2.6,0.1-5.2,0-7.8,0c-0.5,0-0.6-0.2-0.6-0.6c0-1.7,0-3.4,0-5c0-0.5,0.2-0.6,0.6-0.6C132.9,61.7,134.3,61.7,135.7,61.7z"/>
	<path class="st10" d="M247.7,37.5c0-0.1,0-0.1,0-0.2c1.2-0.7,2.3-0.3,3.5,0c0.2,0.1,0.3,0.2,0.2,0.4c-0.4,0.1-0.7,0.1-1.1,0.2
		c-0.9,0.3-1.8,0.2-2.6-0.2C247.7,37.6,247.7,37.5,247.7,37.5z"/>
	<path class="st11" d="M251.4,37.6c-0.1-0.1-0.1-0.2-0.2-0.4c0.4,0,0.7,0,1,0.2C252,37.7,251.7,37.7,251.4,37.6z"/>
	<path class="st12" d="M246.8,37.2c0.1,0.1,0.1,0.2,0.2,0.3c0,0,0,0.1,0,0.1c-1.2,0.7-2.3,0.4-3.5,0c-0.1-0.1-0.1-0.3,0-0.4
		C244.6,37,245.7,36.6,246.8,37.2z"/>
	<path class="st13" d="M240,37.7c0-0.1,0.1-0.2,0.1-0.2c0.8,0,1.5,0,2.3,0c0.1,0,0.1,0.1,0.1,0.1c0,0.1,0,0.1,0,0.1
		C241.6,37.7,240.8,37.7,240,37.7z"/>
	<path class="st14" d="M243.5,37.3c0,0.1,0,0.3,0,0.4c-0.2,0-0.4,0-0.6,0c-0.1-0.2,0-0.3,0.1-0.3C243.2,37.3,243.3,37.3,243.5,37.3z
		"/>
	<path class="st15" d="M243,37.3c0,0.1-0.1,0.2-0.1,0.3c-0.2,0-0.3,0-0.5,0c0-0.1,0-0.1-0.1-0.2C242.5,37.3,242.8,37.3,243,37.3z"/>
            </g>

            <g id='corgi-mid' transform={`translate(${backPartMargin}, 138.25)`} shapeRendering='crispEdges'>
              {/* background */}
              <polygon
                id='Path'
                fill={COLORS.WHITE}
                points={`${sa} 1.00515726 0 1.00515726 0 183.943779 ${sa} 183.943779`}
              ></polygon>
              {/* corgi bottom */}
              <polygon
                id='Path'
                fill={COLORS.BLACK}
                opacity='0.15'
                points={`${sa} 170.5 0 170.5 0 183.943779 ${sa} 183.943779`}
              ></polygon>
              {/* shadow */}
              <rect
                id='Rectangle'
                fill={COLORS.GRAY}
                x='-1'
                y='210.457867'
                width={sa + 2}
                height='25.1489315'
                shapeRendering='crispEdges'
              ></rect>
              {/* body */}
              <polygon id='Path' fill={color} points={`${sa} 1.00515726 0 1.00515726 0 140.84 ${sa} 140.84`}></polygon>
              {/* top border */}
              <rect id='Rectangle' fill={COLORS.BLACK} x='0' y='-0.25' width={sa} height='2'></rect>
              {/* bottom border */}
              <rect id='Rectangle' fill={COLORS.BLACK} x='0' y='183.675' width={sa} height='2'></rect>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
});

CorgiSVG.displayName = 'CorgiSVG';
CorgiSVG.propTypes = CorgiSVGPropTypes;

export default CorgiSVG;
