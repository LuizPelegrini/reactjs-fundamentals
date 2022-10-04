import styles from './styles.module.css';
import { Comment } from '../Comment';

export function Post() {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <img className={styles.avatar} src="https://github.com/LuizPelegrini.png" />
        <div className={styles.authorInfo}>
          <strong className={styles.authorName}>Luiz</strong>
          <span className={styles.authorRole}>Frontend Dev</span>
        </div>
        <time
          className={styles.publishedDate}
          title="29 September 2022 at 9pm"
          dateTime="2022-09-29 21:44:03"
        >
          Published 1h ago
        </time>
      </header>

      <div className={styles.content}>
        <p>Hi folks 👋</p>
        <p>I've just finished pushing another project to my portfolio. It's called DoctorCare 🚀. Feel free to check it out and drop a comment down below! </p>
        <p>👉 <a href="">luiz.design/doctorcare</a></p>
        <p><a href="">#newproject</a> <a href="">#react</a> <a href="">#neverstoplearning</a></p>
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