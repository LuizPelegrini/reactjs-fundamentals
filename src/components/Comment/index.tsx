import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styles from './styles.module.css';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleNewLikeCount(){
    // just a pattern. When we need the previous state value to update to a new value, it's recommended to use a function as argument
    setLikeCount((value) => {
      return value + 1;
    });
  }
  
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/LuizPelegrini.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
              <div className={styles.authorAndTime}>
                <strong>Luiz Pelegrini</strong>
                <time dateTime='2022-09-29 21:44:03' title='29 September 2022 at 9pm'>About 2h ago</time>
              </div>

              <button
                className={styles.commentDeleteButton} 
                title="Delete comment"
                onClick={handleDeleteComment}
              >
                <Trash size={24}/>
              </button>
          </header>
          <p>{ content }</p>
        </div>

        <footer>
          <button type="button" onClick={handleNewLikeCount}>
            <ThumbsUp size={20}/>
            Like<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}