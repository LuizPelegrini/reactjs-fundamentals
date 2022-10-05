import styles from './styles.module.css';

export function Avatar({ hasBorder = true, imgSrc }) {
  return (
    <img 
      className={hasBorder ? styles.avatar : styles.avatarWithoutBorder} 
      src={imgSrc} 
    />
  );
}