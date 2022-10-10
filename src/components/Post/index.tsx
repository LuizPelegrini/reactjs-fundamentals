import { format, formatDistanceToNow } from 'date-fns';

import styles from './styles.module.css';
import { Comment } from '../Comment';
import { Avatar } from '../Avatar';
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  author: Author;
  content: Content[];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState<string[]>([]);
  const [newCommentText, setNewCommentText] = useState('');

  // format publish date
  const publishedAtFormatted = format(publishedAt, "dd LLLL 'at' HH:mm'h'");

  // display date distance from current time
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText(''); // clear textarea
  }

  // updates text value in textarea element
  function handleNewCommentText (event: ChangeEvent<HTMLTextAreaElement>) {
    const target = event.target;
    setNewCommentText(target.value);

    // remove invalid field message, to prevent the situation where the user attempts to submit an empty comment, but then types something (newCommentText is no longer empty) and submit again
    target.setCustomValidity('');
  }

  // customize invalid field message
  function handleNewInvalidComment(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Comment is empty');
  }

  function deleteComment(commentToDelete: string){
    const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete);
    setComments(commentsWithoutDeletedOne);
  }

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <Avatar src={author.avatarUrl} alt=""/>
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
          required
          onInvalid={handleNewInvalidComment}
        />
        
        <footer>
          <button
            type="submit"
            disabled={!newCommentText}
          >
            Comment
          </button>
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