import { format, formatDistanceToNow } from 'date-fns';

import styles from './styles.module.css';
import { Comment } from '../Comment';
import { Avatar } from '../Avatar';
import { useState } from 'react';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  // format publish date
  const publishedAtFormatted = format(publishedAt, "dd LLLL 'at' HH:mm'h'");

  // display date distance from current time
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true
  });

  function handleCreateNewComment(event) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText(''); // clear textarea
  }

  // updates text value in textarea element
  function handleNewCommentText (event) {
    const text = event.target.value;
    setNewCommentText(text);
  }

  function deleteComment(commentToDelete){
    const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete);
    setComments(commentsWithoutDeletedOne);
  }

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <Avatar imgSrc={author.avatarUrl} />
        <div className={styles.authorInfo}>
          <strong className={styles.authorName}>{ author.name }</strong>
          <span className={styles.authorRole}>{ author.role }</span>
        </div>
        <time
          className={styles.publishedDate}
          title={publishedAtFormatted}
          dateTime={publishedAt.toISOString()}
        >
          { publishedDateRelativeToNow }
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if(item.type === 'paragraph')
            return <p key={item.content}>{item.content}</p>

          if(item.type === 'link')
            return <p key={item.content}><a href='#'>{item.content}</a></p>
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Give your feedback</strong>
        <textarea 
          placeholder="Leave your comment"
          onChange={handleNewCommentText}
          value={newCommentText}
        />
        
        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        { comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}  
          />
        ))}
      </div>
    </article>
  );
}