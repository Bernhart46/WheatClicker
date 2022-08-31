type BunSvgProps = {
  position: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
};

export const BunSvg = ({ position }: BunSvgProps) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      style={{
        position: position,
        width: '100%',
      }}
    >
      <path
        vectorEffect="non-scaling-stroke"
        transform="matrix(4 0 0 2.28 258.94 256.32)"
        d="M-57.632 38.587c0-53.14 24.611-96.218 54.971-96.218h7.41 0c29.206 0 52.882 41.442 52.882 92.563h0 0c0 12.537-5.806 22.7-12.969 22.7h-91.414 0c-6.009 0-10.881-8.527-10.881-19.045z"
        stroke="#000000"
        strokeWidth="2"
        fill="#c39159"
        opacity=".63"
      />
      <path
        vectorEffect="non-scaling-stroke"
        transform="matrix(.21 0 0 .21 254.04 191.03)"
        d="M-441.39 167.368C-431.426 86.427-365.114-6.64-365.114-6.64s28.534-52.063 110.371-117.172c30.348-24.144 103.423-73.164 103.423-73.164l-163.695-70.1s93.074-35.297 132.844-35.297 86.506-14.265 86.506-14.265 38.474 49.562 76.6 49.562 75.905-49.562 75.905-49.562h96.733 33.673s180.481-6.482 174.097 27.976-199.632 109.855-199.632 109.855 76.865 59.026 128.107 106.114 86.481 97.108 86.481 97.108 58.244 87.704 65.645 160.881-36.042 131.826-36.042 131.826l-44.558-23.15s-43.234-163.336-92.216-224.839C191.513-28.321 95.446-72.693 95.446-72.693l-146.041-51.119-89.827 61.76-85.727 86.467s-44.161 34.768-88.866 107.944-89.953 184.762-89.953 184.762-46.385-68.814-36.421-149.754z"
        fill="#5c4429"
      />
    </svg>
  </>
);
