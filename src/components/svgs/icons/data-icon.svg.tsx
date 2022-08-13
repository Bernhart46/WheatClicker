import { svgColors } from '../svg.type';

export const DataIconSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    width="500"
    height="500"
    viewBox="0 0 500 500"
    xmlSpace="preserve"
    style={{
      width: '45px',
      height: '45px',
      position: 'relative',
      top: '-49px',
      left: '8px',
    }}
  >
    <g fill={svgColors.light} strokeWidth="2" stroke={svgColors.dark}>
      <path
        vectorEffect="non-scaling-stroke"
        transform="matrix(1 0 0 1.22 200 208.39)"
        d="M-149.833-56.939l2.676-2.706c0-1.476 3.2.851 4.073 0 3.418-3.331 6.832-6.27 10.464-9.527 11.134-9.983 22.697-20.609 37.956-33.106 15.242-12.484 28.236-23.96 41.25-33.763 4.026-3.032 7.244-5.819 11.164-8.693 1.209-.886 2.451-5.099 4.504-5.099l4.747.451 182.832-.451v299.666h-299.666z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        transform="matrix(0 -1.37 1.37 0 105.34 83.98)"
        d="M-40-39.338c0-.157.095-.298.239-.358s.312-.027.423.084L40 39.726h-80z"
      />
    </g>
    <g fill={svgColors.dark} vectorEffect="non-scaling-stroke">
      <path
        transform="matrix(1.34 0 0 .11 249.77 114.46)"
        d="M-65.976-65.976H65.976V65.976H-65.976z"
      />
      <path
        transform="matrix(2.1 0 0 .11 199.72 176.77)"
        d="M-65.976-65.976H65.976V65.976H-65.976z"
      />
      <path
        transform="matrix(2.1 0 0 .11 199.58 235.08)"
        d="M-65.976-65.976H65.976V65.976H-65.976z"
      />
      <path
        transform="matrix(2.1 0 0 .11 199.86 294.98)"
        d="M-65.976-65.976H65.976V65.976H-65.976z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        transform="matrix(2.1 0 0 .11 200.42 350.54)"
      />
    </g>
  </svg>
);
