import styles from './styles.module.css';

interface AvatarProps {
  hasBorder?: boolean;
  imgSrc: string;
  alt?: string;
}

export function Avatar({ hasBorder = true, imgSrc, alt }: AvatarProps) {
  return (
    <img 
      className={hasBorder ? styles.avatar : styles.avatarWithoutBorder} 
      src={imgSrc}
      alt={alt}
    />
  );
}