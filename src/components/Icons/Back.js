import React from 'react';
import { string } from 'prop-types';
import Sizes from '../../components/utils/iconSizes';

const propTypes = {
  size: string
};

const Back = ({ size = 'md', ...props }) => {
  const { width, height } = Sizes[size];

  return (
    <svg width={width} height={height} viewBox="0 0 19 20" {...props}>
      <g
        strokeWidth={3}
        stroke="#1D1E1F"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 10h14.5M10 18l-8-8 8-8" />
      </g>
    </svg>
  );
};

Back.propTypes = propTypes;

export { Back };
