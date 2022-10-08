import { format, formatDistanceToNow } from 'date-fns';

import styles from './styles.module.css';
import { Comment } from '../Comment';
import { Avatar } from '../Avatar';

export function Post({ author, content, publishedAt }) {
  // format publish date
  const publishedAtFormatted = format(publishedAt, "dd LLLL 'at' HH:mm'h'");

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true
  });
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
        {content.map(item => {
          if(item.type === 'paragraph')
            return <p>{item.content}</p>

          if(item.type === 'link')
            return <p><a href='#'>{item.content}</a></p>
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Give your feedback</strong>
        <textarea placeholder="Leave your comment" />
        
        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}