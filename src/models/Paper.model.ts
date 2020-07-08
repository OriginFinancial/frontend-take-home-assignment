export interface PaperProps {
  children: ChildrenProps;
  radiusSmall?: boolean;
}

export interface ChildrenProps {
  children?: JSX.Element[] | JSX.Element | React.ReactNode;
}
