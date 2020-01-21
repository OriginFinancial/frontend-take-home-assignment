import React from 'react';
import { string } from 'prop-types';
import { VARIANTS } from './constants';
import { Typography } from './components/Typography';

const propTypes = {
  variant: string
};

const TypographyComponent = ({ variant = 'body1', ...other }) => {
  const Component = React.useCallback(
    Typography.withComponent(VARIANTS[variant]),
    [variant]
  );

  return <Component variant={variant} {...other} />;
};

TypographyComponent.propTypes = propTypes;

export { TypographyComponent as Typography };
