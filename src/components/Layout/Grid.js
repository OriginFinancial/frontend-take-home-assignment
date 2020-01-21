import React from 'react';
import { oneOfType, elementType, string, bool, number } from 'prop-types';
import { Grid as Root } from './components/Grid';

const propTypes = {
  component: oneOfType([elementType, string]),
  className: string,
  'data-testid': string,
  container: bool,
  item: bool,
  justifyItems: string,
  alignContent: string,
  alignItems: string,
  colStart: number,
  colEnd: number,
  rowStart: number,
  rowEnd: number,
  justifySelf: string,
  alignSelf: string
};

const defaultProps = {
  component: 'div'
};

const Grid = React.forwardRef(function Grid(props, ref) {
  const {
    component,
    className,
    container,
    item,
    justifyItems,
    alignContent,
    alignItems,
    colStart,
    colEnd,
    rowStart,
    rowEnd,
    justifySelf,
    alignSelf,
    ...other
  } = props;

  return (
    <Root
      as={component}
      ref={ref}
      className={className}
      container={container}
      item={item}
      justifyItems={justifyItems}
      alignContent={alignContent}
      alignItems={alignItems}
      colStart={colStart}
      colEnd={colEnd}
      rowStart={rowStart}
      rowEnd={rowEnd}
      justifySelf={justifySelf}
      alignSelf={alignSelf}
      data-testid={props['data-testid']}
      {...other}
    />
  );
});

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export { Grid };
