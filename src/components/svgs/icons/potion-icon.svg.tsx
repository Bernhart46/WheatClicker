import { svgColors } from '../svg.type';

export const PotionIconSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    width="500"
    height="500"
    viewBox="0 0 500 500"
    xmlSpace="preserve"
    style={{
      width: '40px',
      height: '40px',
      position: 'relative',
      top: '-51px',
      left: '5px',
    }}
  >
    <path
      vectorEffect="non-scaling-stroke"
      transform="translate(77.55 150.27)"
      d="M167.224 0c92.308 0 167.224 74.916 167.224 167.224s-74.916 167.224-167.224 167.224S0 259.532 0 167.224 74.916 0 167.224 0z"
      stroke={svgColors.dark}
      strokeWidth="5"
      fill={svgColors.light}
    />
    <g fill={svgColors.dark}>
      <path
        vectorEffect="non-scaling-stroke"
        transform="matrix(1.49 .7 -.44 .99 342.87 105.88)"
        d="M-39.019-73.3h78.038V73.3h-78.038z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        transform="matrix(5.1 0 0 3.16 247.33 258.13)"
        d="M-.366-31.594c5.023 0 11.906 1.151 17.169 6.109C24.876-17.88 30.512-4.426 30.512 3.278c0 3.668 2.566 14.496.738 19.889-2.749 8.111-12.068 8.258-18.101 8.427C9.273 31.702.333 19.935-10.32 8.612s-21.587-1.499-21.587-1.499 4.319-12.234 4.319-15.65c0-12.727 14.494-23.057 27.221-23.057z"
      />
    </g>
  </svg>
);
