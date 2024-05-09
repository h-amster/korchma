import classNames from 'classnames';
import './Container.scss';

type Props = {
  children: React.ReactNode;
  classes?: string[];
};

export const Container: React.FC<Props> = ({ children, classes = [] }) => {
  return (
    <div className={classNames('container', classes.join(' '))}>{children}</div>
  );
};
