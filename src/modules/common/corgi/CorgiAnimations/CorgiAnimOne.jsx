/* eslint-disable max-len */
import React from 'react';

import { CorgiType } from '~types/CorgiTypes';

const CorgiAnimOnePropTypes = { color: CorgiType.color };

const CorgiAnimOne = ({ color }) => (
  <div className='corgi-anim corgi-anim--one'>
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="191.000000pt" height="191.000000pt" viewBox="0 0 191.000000 191.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,191.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M1741 1741 c16 -16 29 -39 29 -52 0 -12 19 -76 41 -142 41 -117 42
-122 31 -181 -7 -34 -21 -81 -32 -104 l-21 -42 -47 24 c-26 13 -68 26 -94 30
-27 4 -48 12 -48 17 0 6 6 7 13 3 9 -5 9 -4 0 6 -6 7 -23 13 -38 13 -14 0 -32
8 -39 18 -7 10 -15 16 -18 13 -6 -5 -17 41 -25 106 -7 50 -7 62 1 85 4 12 1
10 -6 -4 -12 -24 -13 -23 -25 20 l-12 44 5 -45 c2 -25 1 -67 -4 -95 l-8 -50
-19 55 c-12 35 -20 48 -23 36 -2 -10 1 -23 7 -29 13 -13 15 -114 2 -122 -15
-9 -22 30 -11 60 12 33 8 42 -10 20 -7 -8 -18 -15 -24 -15 -21 0 -76 -78 -76
-108 0 -11 -22 -48 -49 -83 -34 -46 -50 -77 -55 -109 -4 -29 -23 -71 -51 -114
-25 -38 -38 -66 -30 -62 8 3 15 3 15 0 0 -11 -76 -96 -96 -107 -29 -16 -106
-80 -177 -147 l-59 -55 -18 23 c-11 13 -20 24 -22 25 -2 0 -31 -18 -65 -41
-34 -23 -67 -42 -73 -42 -5 0 -18 -13 -29 -30 -10 -16 -20 -28 -22 -26 -2 2
-12 -7 -22 -20 -31 -41 4 -28 45 17 21 22 42 39 48 37 5 -1 -1 -16 -16 -31
-36 -39 -40 -65 -8 -59 13 2 24 8 24 13 0 5 9 9 20 9 11 0 20 -5 20 -12 0 -6
10 -2 21 11 19 20 27 22 69 16 38 -5 59 -2 95 14 26 12 52 21 56 21 5 0 17
-17 25 -37 9 -21 20 -46 25 -55 5 -10 9 -20 9 -23 0 -3 -39 -25 -87 -49 -49
-25 -108 -63 -131 -86 -24 -22 -61 -52 -83 -65 -37 -24 -77 -81 -65 -93 3 -3
6 0 6 6 0 7 7 12 15 12 8 0 15 -7 15 -17 0 -10 11 -1 28 22 47 66 110 123 146
133 19 6 45 20 58 32 21 20 119 73 123 67 1 -1 19 -36 40 -77 60 -120 65 -122
130 -56 24 25 72 59 106 77 35 17 81 46 101 63 20 17 51 42 68 55 17 13 50 49
72 80 23 31 80 93 129 139 100 95 130 140 175 267 17 50 44 122 58 160 24 63
26 79 22 170 -7 139 -43 340 -72 397 -20 38 -79 98 -97 98 -11 0 -7 -9 14 -29z
m-324 -427 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-198 -186
c-12 -20 -14 -21 -17 -5 -2 10 2 25 9 34 18 21 23 0 8 -29z"/>
<path d="M874 1611 c3 -5 -1 -11 -8 -14 -8 -3 -17 -1 -20 6 -3 8 -5 7 -5 -3
-1 -8 -15 -27 -33 -42 -29 -25 -33 -25 -45 -10 -11 15 -12 14 -11 -8 1 -14
-15 -50 -35 -81 -20 -31 -39 -68 -43 -83 -3 -14 -9 -26 -14 -26 -4 0 -23 -16
-43 -35 -20 -19 -45 -35 -55 -35 -11 0 -25 -6 -31 -14 -15 -18 -22 -56 -10
-56 11 0 49 37 49 48 0 10 69 47 76 40 7 -7 -37 -78 -60 -97 -9 -7 -16 -21
-16 -31 0 -30 -29 -89 -50 -100 -11 -6 -20 -16 -20 -22 0 -6 -8 -21 -17 -32
-10 -11 3 -4 30 17 l47 38 28 -20 c56 -39 57 -44 22 -109 -27 -52 -36 -75 -39
-104 -1 -5 -14 -8 -31 -8 -16 0 -49 -6 -72 -14 -24 -8 -65 -17 -93 -21 l-50
-7 23 22 c12 11 22 24 22 28 0 4 -24 8 -53 9 -28 1 -69 9 -89 17 -37 16 -59
36 -39 36 6 0 11 6 11 13 0 6 24 33 52 58 29 26 50 50 46 54 -4 4 -22 -8 -40
-27 -18 -19 -55 -48 -83 -63 -27 -16 -51 -29 -53 -30 -10 -7 14 -35 29 -35 10
0 19 -5 19 -11 0 -5 -5 -7 -10 -4 -6 4 -5 -5 2 -19 11 -26 28 -35 28 -16 0 6
5 10 11 10 6 0 9 -7 5 -15 -3 -9 0 -15 9 -15 8 0 15 -4 15 -10 0 -5 10 -10 23
-10 13 0 28 -5 33 -10 7 -7 32 -6 77 5 39 9 100 14 143 13 74 -3 77 -2 100 27
13 17 24 41 24 55 0 42 35 84 71 86 48 3 148 35 146 47 -1 6 3 12 8 12 6 1 18
5 28 9 22 10 50 0 41 -15 -4 -7 -3 -9 4 -5 6 3 14 20 17 37 4 17 21 48 39 68
43 50 72 92 80 118 6 17 0 25 -32 43 -40 23 -72 72 -72 112 0 27 47 78 72 78
10 0 18 5 18 10 0 6 -6 10 -12 10 -7 0 -44 32 -82 70 -38 39 -73 70 -78 70 -5
0 -7 -4 -4 -9z"/>
<path d="M1101 1434 c-12 -15 -21 -37 -21 -50 0 -12 -3 -31 -7 -41 -6 -17 -5
-17 15 1 14 12 20 26 17 37 -4 11 2 26 14 38 12 12 21 26 21 31 0 18 -18 10
-39 -16z"/>
<path d="M453 1202 c-22 -7 -79 -57 -126 -112 -21 -25 -30 -30 -41 -21 -7 6
-16 8 -19 4 -4 -3 -7 -1 -7 5 0 7 -7 12 -17 12 -12 0 -8 -7 13 -25 31 -27 44
-31 44 -15 0 6 6 10 14 10 7 0 31 18 52 41 22 22 60 54 87 71 26 17 47 33 47
35 0 4 -21 2 -47 -5z"/>
<path d="M140 1013 c-36 -11 -60 -27 -60 -40 0 -7 -10 -13 -22 -13 -47 -1 -72
-42 -37 -60 27 -15 49 -6 49 19 0 24 15 34 52 36 30 2 68 30 68 52 0 13 -21
16 -50 6z"/>
<path d="M355 950 c-3 -6 1 -7 9 -4 18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"/>
<path d="M106 923 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z"/>
<path d="M610 735 c-19 -13 -39 -28 -45 -33 -5 -4 -19 -12 -30 -16 -13 -6 -16
-10 -7 -13 11 -4 46 13 77 39 5 5 21 17 34 28 33 28 13 24 -29 -5z"/>
<path d="M332 667 c-35 -11 -94 -75 -110 -117 -6 -15 -5 -36 0 -53 6 -15 8
-34 5 -41 -6 -15 12 -26 45 -26 20 0 20 1 -2 18 -22 18 -26 45 -17 118 4 32
49 73 83 77 16 2 35 7 42 11 7 4 32 7 55 6 64 -3 77 -1 77 10 0 13 -135 11
-178 -3z"/>
<path d="M448 469 c-10 -5 -36 -7 -58 -4 -32 5 -43 2 -60 -15 -12 -12 -20 -24
-17 -26 9 -9 140 25 155 40 18 18 6 21 -20 5z"/>
<path d="M553 140 c0 -30 2 -43 4 -28 2 16 2 40 0 56 -2 15 -4 2 -4 -28z"/>
</g>
</svg>
  </div>
);

CorgiAnimOne.propTypes = CorgiAnimOnePropTypes;

export default CorgiAnimOne;
