import { svgColors } from '../svg.type';

export const CookIconSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    width="500"
    height="500"
    viewBox="0 0 500 500"
    xmlSpace="preserve"
    style={{
      width: '50px',
      height: '50px',
      position: 'relative',
      left: '4px',
      top: '-51px',
    }}
  >
    <path
      vectorEffect="non-scaling-stroke"
      transform="translate(59.53 178.82)"
      d="M144.036 0c79.508 0 144.036 47.547 144.036 106.132s-64.528 106.132-144.036 106.132S0 164.716 0 106.132 64.528 0 144.036 0z"
      fill={svgColors.light}
    />
    <g fill={svgColors.dark}>
      <path
        vectorEffect="non-scaling-stroke"
        transform="translate(88.97 122.19)"
        d="M0 0h230.546v102.564H0z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        transform="translate(28.32 39.69)"
        d="M76.031 0C118 0 152.062 34.062 152.062 76.031S118 152.062 76.031 152.062 0 118 0 76.031 34.062 0 76.031 0z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        transform="translate(127.54 14.91)"
        d="M76.031 0C118 0 152.062 34.062 152.062 76.031S118 152.062 76.031 152.062 0 118 0 76.031 34.062 0 76.031 0z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        transform="translate(243.48 26.76)"
        d="M76.031 0C118 0 152.062 34.062 152.062 76.031S118 152.062 76.031 152.062 0 118 0 76.031 34.062 0 76.031 0z"
      />
    </g>
  </svg>
);
