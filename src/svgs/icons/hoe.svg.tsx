import { svgColors } from '../svg.type';

export const HoeSvg = () => (
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
      top: '-53px',
      left: '2px',
    }}
  >
    <path
      vectorEffect="non-scaling-stroke"
      transform="matrix(1.87 -1.08 .53 .92 264.49 198.85)"
      d="M-6.296 96.796l-1.98-134.437-6.028-136.02h0c-.32-7.211.86-14.364 3.249-19.709s5.769-8.391 9.312-8.391h0 0c4.464 0 8.731 3.758 11.797 10.39s4.658 15.552 4.404 24.66L10.245-15.788l4.938 206.922h0c.066 2.77-.426 5.474-1.362 7.482s-2.234 3.145-3.591 3.145h-23.587 0c-.543 0-1.058-.492-1.406-1.343s-.494-1.974-.398-3.066z"
      fill={svgColors.light}
    />
    <g fill={svgColors.dark}>
      <path
        vectorEffect="non-scaling-stroke"
        transform="matrix(.52 .86 -1.96 1.18 179.51 55.15)"
        d="M-17.232-12.407c0-2.665 4.915-4.825 10.978-4.825H7.431h0c5.413 0 9.801 1.929 9.801 4.308v25.332h0c0 2.665-4.915 4.825-10.978 4.825H-7.431h0c-5.413 0-9.801-1.929-9.801-4.308z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        transform="matrix(1.04 -1.07 1.07 1.04 93.2 127.31)"
        d="M-60.482 10.918l44.658-19.671 37.969-5.958 15.575 1.03 22.761 6.981v21.41L20.561 4.804-10.654 5.849z"
      />
    </g>
  </svg>
);
