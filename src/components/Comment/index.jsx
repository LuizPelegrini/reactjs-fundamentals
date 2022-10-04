import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './styles.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/LuizPelegrini.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
              <div className={styles.authorAndTime}>
                <strong>Luiz Pelegrini</strong>
                <time dateTime='2022-09-29 21:44:03' title='29 September 2022 at 9pm'>About 2h ago</time>
              </div>

              <button className={styles.commentDeleteButton} title="Delete comment">
                <Trash size={24}/>
              </button>
          </header>
          <p>That's great! Congratulations!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20}/>
            Like<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}