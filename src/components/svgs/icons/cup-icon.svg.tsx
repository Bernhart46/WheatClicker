import { svgColors, svgProps } from '../svg.type';

export const CupIconSvg = ({ width, height }: svgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    width="500"
    height="500"
    viewBox="0 0 500 500"
    xmlSpace="preserve"
    style={{ width, height, position: 'relative', left: '6px', top: '-51px' }}
  >
    <g fill={svgColors.light} stroke={svgColors.dark} strokeWidth="3">
      <path
        vectorEffect="non-scaling-stroke"
        transform="translate(198.77 346.04)"
        d="M-89.186-16.816c0-6.844 5.548-12.392 12.392-12.392h79.47 74.118 0c6.844 0 12.392 5.548 12.392 12.392v46.025H-89.186z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        transform="matrix(1 0 0 .94 200 128.53)"
        d="M-185.507-89.409h371.014v60.316h0c0 65.447-50.104 118.502-111.91 118.502H-66.404h0c-65.779 0-119.103-56.465-119.103-126.119z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        transform="matrix(.76 0 0 .87 198.77 169.06)"
        d="M-123.523-166.017h247.046V35.139h0c0 25.344-23.463 45.89-52.406 45.89H42.181v84.988h-76.16V81.029h-37.138 0c-28.943 0-52.406-20.546-52.406-45.89z"
      />
    </g>
  </svg>
);
