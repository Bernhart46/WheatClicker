import { svgColors } from '../svg.type';

export const OptionsIconSvg = () => (
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
      left: '6px',
      top: '-51px',
    }}
  >
    <path
      vectorEffect="non-scaling-stroke"
      transform="matrix(4.96 0 0 4.96 1.6 1.6)"
      d="M2.246 47.549h11.313c.839 0 1.592.524 1.872 1.305l.935 2.256c.353.751.192 1.655-.401 2.248l-8 8a2.23 2.23 0 0 0 0 3.176l7.501 7.501a2.23 2.23 0 0 0 3.176 0l8-8c.58-.58 1.51-.748 2.248-.401l2.256.934a1.99 1.99 0 0 1 1.305 1.873v11.313A2.25 2.25 0 0 0 34.696 80h10.608a2.25 2.25 0 0 0 2.246-2.246V66.441a1.99 1.99 0 0 1 1.304-1.873l2.257-.934c.737-.347 1.668-.179 2.248.401l8 8a2.23 2.23 0 0 0 3.176 0l7.501-7.501a2.23 2.23 0 0 0 .658-1.588c0-.6-.233-1.164-.658-1.588l-8-8c-.593-.593-.754-1.497-.401-2.248l.934-2.256a1.99 1.99 0 0 1 1.873-1.305h11.313a2.25 2.25 0 0 0 2.246-2.246V34.696a2.25 2.25 0 0 0-2.246-2.246H66.441c-.839 0-1.592-.524-1.872-1.305l-.935-2.256c-.353-.751-.192-1.655.401-2.248l8-8a2.23 2.23 0 0 0 0-3.176l-7.501-7.501a2.23 2.23 0 0 0-3.176 0l-8 8c-.58.58-1.51.748-2.248.401l-2.256-.934a1.99 1.99 0 0 1-1.305-1.873V2.246A2.25 2.25 0 0 0 45.304 0H34.696a2.25 2.25 0 0 0-2.246 2.246v11.313a1.99 1.99 0 0 1-1.304 1.873l-2.257.934c-.737.347-1.668.179-2.248-.401l-8-8a2.23 2.23 0 0 0-3.176 0l-7.501 7.501a2.23 2.23 0 0 0-.658 1.588c0 .6.233 1.164.658 1.588l8 8c.593.593.754 1.497.401 2.248l-.934 2.256a1.99 1.99 0 0 1-1.873 1.305H2.246A2.25 2.25 0 0 0 0 34.696v10.608a2.25 2.25 0 0 0 2.246 2.245zM40 27.717c6.784 0 12.283 5.499 12.283 12.283S46.784 52.283 40 52.283 27.717 46.784 27.717 40 33.216 27.717 40 27.717z"
      fill={svgColors.dark}
    />
  </svg>
);
