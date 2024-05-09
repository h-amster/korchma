import './Accordion.scss';
import classNames from 'classnames';

type Props = {
  title: string;
  content: string;
  id: number;
  currentOpenedId: number | null;
  setCurrentOpenedId: (val: number | null) => void;
};

export const Accordion: React.FC<Props> = ({
  title,
  content,
  id,
  currentOpenedId,
  setCurrentOpenedId,
}) => {
  const isOpened = id === currentOpenedId;

  const handleTriggerClick = () => {
    if (id === currentOpenedId) {
      setCurrentOpenedId(null);
    } else {
      setCurrentOpenedId(id);
    }
  };

  return (
    <article
      className={classNames('accordion', { 'accordion--open': isOpened })}
    >
      <button className="accordion__trigger" onClick={handleTriggerClick}>
        <h3 className="accordion__title">{title}</h3>

        <svg
          className="accordion__svg"
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="accordion__path"
            d="M2 4L8 10L14 4"
            stroke="#333333"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="accordion__content-wrapper">
        <p className="accordion__content">{content}</p>
      </div>
    </article>
  );
};
