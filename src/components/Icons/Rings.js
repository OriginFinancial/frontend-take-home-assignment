import React from 'react';
import { string } from 'prop-types';
import Sizes from '../../components/utils/iconSizes';

const propTypes = {
  size: string
};

const Rings = ({ size = 'md', ...props }) => {
  const { width, height } = Sizes[size];

  return (
    <svg width={width} height={height} viewBox="0 0 40 35" {...props}>
      <path
        d="M28.421 11.111C34.816 11.111 40 16.334 40 22.778c0 6.443-5.184 11.666-11.579 11.666-3.318 0-6.31-1.406-8.422-3.66l-.136.145a11.502 11.502 0 01-8.284 3.515C5.184 34.444 0 29.221 0 22.778 0 16.334 5.184 11.11 11.579 11.11a11.5 11.5 0 018.214 3.444l.208.216a11.5 11.5 0 018.42-3.66zm0 2.333a9.164 9.164 0 00-6.976 3.225l.085.14a11.68 11.68 0 011.628 5.969c0 2.254-.635 4.36-1.734 6.143l.022-.035a9.163 9.163 0 006.975 3.225c5.087 0 9.226-4.17 9.226-9.333s-4.139-9.334-9.226-9.334zm-16.842 0c-5.087 0-9.226 4.17-9.226 9.334 0 5.163 4.139 9.333 9.226 9.333 5.087 0 9.226-4.17 9.226-9.333s-4.14-9.334-9.226-9.334zM15.439.988A3.463 3.463 0 0120 .74c1.365-1.065 3.324-.965 4.555.247l.008.007a3.322 3.322 0 01-.008 4.745L20.33 9.867a.484.484 0 01-.667 0L15.438 5.74a3.338 3.338 0 010-4.752z"
        fill="#657786"
        fillRule="nonzero"
      />
    </svg>
  );
};

Rings.propTypes = propTypes;

export { Rings };
