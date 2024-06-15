import { Comment } from '../../types/Comment';
import { Stars } from '../Stars/Stars';
import './CommentBlock.scss';

type Props = {
  comment: Comment;
};

export const CommentBlock: React.FC<Props> = ({ comment }) => {
  const { name, body, advantages, disadvantages, rating } = comment;

  return (
    <div className="comment">
      <p className="comment__name">{name}</p>

      <Stars rating={rating} />

      <p className="comment__text">{body}</p>

      <dl className="comment__additional">
        {advantages && (
          <div className="comment__additional-block">
            <dt className="comment__term">Плюси</dt>
            <dd className="comment__description">{advantages}</dd>
          </div>
        )}

        {disadvantages && (
          <div className="comment__additional-block">
            <dt className="comment__term">Мінуси</dt>
            <dd className="comment__description">{disadvantages}</dd>
          </div>
        )}
      </dl>
    </div>
  );
};
