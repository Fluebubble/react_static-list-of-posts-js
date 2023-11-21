import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = (props) => {
  const { comments } = props;

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo
          comment={comment}
          key={comment.id}
        />
      ))}
    </div>
  );
};