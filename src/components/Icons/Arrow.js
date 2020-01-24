import React from 'react';
import { string } from 'prop-types';
import Sizes from '../../components/utils/iconSizes';

const propTypes = {
  size: string
};

const Arrow = ({ size = 'md', ...props }) => {
  const { width, height } = Sizes[size];

  return (
    <svg width={width} height={height} viewBox="0 0 10 19" {...props}>
      <path
        d="M9.686 16.914a.9.9 0 11-1.272 1.272l-8.1-8.1a.9.9 0 010-1.272l8.1-8.1a.9.9 0 111.272 1.272L2.223 9.45l7.463 7.464z"
        fill="#657786"
        fillRule="evenodd"
      />
    </svg>
  );
};

Arrow.propTypes = propTypes;

export { Arrow };
