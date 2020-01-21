import React from 'react';
import { string } from 'prop-types';

const propTypes = {
  width: string,
  height: string
};

const Tip = ({ width = '4em', height = '4em', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 18" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          d="M9 17A8 8 0 109 1a8 8 0 000 16zm0 1A9 9 0 119 0a9 9 0 010 18z"
          fill="#AAB8C2"
        />
        <circle fill="#FFF" cx={9} cy={9} r={8.1} />
        <path
          d="M9.9 8.114v4.293c0 .36-.086.632-.257.817a.853.853 0 01-.653.276.813.813 0 01-.643-.283c-.165-.189-.247-.459-.247-.81v-4.24c0-.356.082-.624.247-.804.165-.18.38-.27.643-.27.264 0 .481.09.653.27.171.18.257.43.257.75zm-.89-1.856a.95.95 0 01-.643-.23c-.178-.154-.267-.372-.267-.653a.81.81 0 01.274-.628.92.92 0 01.636-.247c.233 0 .44.075.62.224.18.149.27.366.27.651 0 .277-.088.493-.264.649a.913.913 0 01-.626.234z"
          fill="#AAB8C2"
        />
      </g>
    </svg>
  );
};

Tip.propTypes = propTypes;

export { Tip };
