import { svgProps } from './svg.type';

export const navButtonSvg = ({ width, height }: svgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    width="500"
    height="500"
    viewBox="0 0 500 500"
    xmlSpace="preserve"
    style={{ width, height }}
  >
    <defs></defs>
    <g
      transform="matrix(13.39 0 0 13.39 251.44 268.72)"
      id="nav-button-svg-shadow"
      // style={{ display: isShadow ? 'none' : 'block' }}
    >
      <path
        stroke="rgb(246,150,89)"
        strokeWidth="0"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset="0"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        fill="rgb(82,27,50)"
        fillRule="nonzero"
        opacity="1"
        vectorEffect="non-scaling-stroke"
        transform=" translate(0, 0)"
        d="M -17.85 6.73 C -17.85 6.73 -10.94 6.41 -10.94 6.18 C -10.94 5.95 -17.85 6.18 -17.85 6.18 C -17.85 6.18 -17.85 4.6 -17.85 3.60 C -17.85 2.61 -17.85 2.52 -17.85 2.52 C -17.85 2.52 -14.91 2.76 -14.91 2.52 C -14.91 2.28 -17.85 1.83 -17.85 1.83 L -17.85 -4.83 L -9.21 -4.83 L -17.85 -5.56 L -17.85 -9.67 L -17.85 -9.67 C -17.85 -13.60 -14.66 -16.79 -10.72 -16.79 C -4.34 -16.79 8.61 -16.79 8.61 -16.79 C 12.46 -16.79 17.68 -15.6 17.8 -11.75 C 17.8 -11.67 17.8 -9.97 17.8 -9.89 C 17.8 -9.9 15 -9.9 15 -9.55 C 15 -9.35 15.39 -9.26 17 -9.23 C 18.66 -9.2 17.35 -3.4 17.36 2.21 C 17.36 2.36 13.98 1.62 13.98 1.83 C 13.98 2 17.36 3.52 17.36 3.74 C 17.36 4.51 16.81 8 16.55 10.17 L 16.55 10.17 C 16 13.95 12.87 16.79 9 16.79 L -10.72 16.79 L -10.72 16.79 C -14.66 16.79 -17.85 13.6 -17.85 9.67 z"
      />
    </g>
    <g transform="matrix(6 0 0 6 262.62 239.05)" id="nav-button-svg-surface">
      <path
        stroke="rgb(246,150,89)"
        strokeWidth="1"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset="0"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        fill="rgb(158,62,50)"
        fillRule="nonzero"
        opacity="1"
        vectorEffect="non-scaling-stroke"
        transform=" translate(0, 0)"
        d="M -37.96 20.87 L -20 20.87 L -37.96 19.66 L -37.96 11.2 C -37.96 11.2 -34.3 10.84 -34.3 10.48 C -34.3 10.12 -37.96 9.76 -37.96 9.76 L -37.96 -6.39 L -22.12 -7.14 L -37.96 -7.87 L -37.96 -21.86 L -37.96 -21.86 C -37.96 -30.75 -30.75 -37.96 -21.86 -37.96 L 21.86 -37.96 L 21.86 -37.96 C 30.75 -37.96 37.96 -30.75 37.96 -21.86 L 37.96 -17.59 L 0.21 -15.25 L 37.96 -15 L 37.96 10.39 L 19.6 12 L 37.96 12 L 37.96 21.86 L 37.96 21.86 C 37.96 30.75 30.75 37.96 21.86 37.96 L -21.86 37.96 L -21.86 37.96 C -30.75 37.96 -37.96 30.75 -37.96 21.86 z"
      />
    </g>
  </svg>
);
