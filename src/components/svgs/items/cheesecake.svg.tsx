type CheesecakeSvgProps = {
  position: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
};

export const CheesecakeSvg = ({ position }: CheesecakeSvgProps) => (
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
      <g stroke="#000">
        <path
          fill="#c78d06"
          vectorEffect="non-scaling-stroke"
          transform="translate(258.9 240.04)"
          d="M-224.723 124.207l-4.088-80.972L-8.9-140.098l8.217-23.609s14.822-10.52 21.566-11.785c6.81-1.277 24.648 4.088 24.648 4.088l13.429 18.578s20.829-11.894 36.364-4.734c5.483 2.527 18.1 12.713 18.1 12.713l7.677 20.662s7.936-6.552 17.419-7.304 20.512 4.294 20.512 4.294 8.116 3.018 13.44 11.952 7.856 23.786 7.856 23.786 12.459-3.093 24.276 0c9.258 2.423 17.874 9.836 21.447 17.554 2.991 6.46 2.757 28.378 2.757 28.378l-15.94 24.348L172.471 96.44S2.655 140.19-94.781 159.902s-122.492 15.385-122.492 15.385z"
          opacity=".81"
        />
        <path
          vectorEffect="non-scaling-stroke"
          transform="translate(238.49 248.44)"
          d="M-94.918-61.499l106.426-87.643s63.32 6.487 110.444 32.929 86.953 72.199 86.953 72.199L174.93 70.089s-67.207 20.865-160.846 40.629-213.71 38.425-213.71 38.425-4.66-38.902-6.213-67.479l-3.064-47.472z"
          opacity=".83"
          fill="#f0d79e"
        />
      </g>
      <path
        vectorEffect="non-scaling-stroke"
        transform="matrix(.94 -.17 1.04 .36 238.74 243.39)"
        d="M-216.531-1.14l444.216-4.122-9.341 7.104-446.03 3.42z"
      />
    </svg>
  </>
);
