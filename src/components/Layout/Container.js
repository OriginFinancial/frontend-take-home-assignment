import React from 'react';
import { Container as Root } from './components/Container';

const Container = React.forwardRef(function Container(props, ref) {
  return <Root as="div" ref={ref} {...props} />;
});

Container.displayName = 'Container';

export { Container };
