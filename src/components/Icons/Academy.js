import React from 'react';
import { string } from 'prop-types';

const propTypes = {
  width: string,
  height: string
};

const Academy = ({ width = '4em', height = '4em', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 40 18" {...props}>
      <g fill="#657786" fillRule="evenodd">
        <path d="M31.752 14.845v-6.43l-10.47 2.07a6.576 6.576 0 01-2.531 0L8.28 8.415v6.43c0 1.663 5.254 3.014 11.736 3.014 6.481 0 11.735-1.347 11.735-3.014z" />
        <path d="M39.16 3.714L21.038.127a5.372 5.372 0 00-1.021-.102 5.09 5.09 0 00-1.022.102L.873 3.714c-1.109.22-1.109 1.773 0 1.992L8.28 7.171l10.714 2.118c.335.066.678.102 1.022.102a5.09 5.09 0 001.021-.102l10.714-2.118 3.334-.66v7.622a1.832 1.832 0 00-.641 1.391c0 1.021.844 1.85 1.882 1.85 1.038 0 1.882-.829 1.882-1.85 0-.557-.248-1.053-.641-1.39V6.02l1.592-.314c1.105-.22 1.105-1.773 0-1.992z" />
      </g>
    </svg>
  );
};

Academy.propTypes = propTypes;

export { Academy };
