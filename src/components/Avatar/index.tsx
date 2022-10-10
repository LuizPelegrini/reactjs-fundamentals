import { ImgHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...imgAttrs }: AvatarProps) {
  return (
    <img 
      className={hasBorder ? styles.avatar : styles.avatarWithoutBorder} 
      {...imgAttrs}
    />
  );
}