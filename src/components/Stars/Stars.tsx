import './Stars.scss';

type Props = {
  rating: number;
};

export const Stars: React.FC<Props> = ({ rating }) => {
  return (
    <div className={`stars stars--${rating}`}>
      <div className="stars__star"></div>
      <div className="stars__star"></div>
      <div className="stars__star"></div>
      <div className="stars__star"></div>
      <div className="stars__star"></div>
    </div>
  );
};
