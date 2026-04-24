import React from 'react';
import clsx from 'clsx';
import styles from '../styles.module.css';

const TimelineItem = ({
  className,
  style,
  children,
  align = 'left',
  textAlign = 'justify',
  variant = 'primary',
  italic = false,
  noDecoration = false,
  transform,
  breakWord = false,
  truncate = false,
  weight,
  color,
  shadow = 'tl',
  highlight = false,
}) => {
  const boxshadow = shadow ? `item shadow--${shadow}` : '';
  const bgcolor = variant ? styles[`timeline__content--${variant}`] : '';
  const itemalign = align ? styles[`timeline__item--${align}`] : '';
  const text = textAlign ? `text--${textAlign}` : '';
  const textColor = color ? `text--${color}` : '';
  const textItalic = italic ? 'text--italic' : '';
  const textDecoration = noDecoration ? 'text-no-decoration' : '';
  const textType = transform ? `text--${transform}` : '';
  const textBreak = breakWord ? 'text--break' : '';
  const textTruncate = truncate ? 'text--truncate' : '';
  const textWeight = weight ? `text--${weight}` : '';
  const highlightClass = highlight ? styles.timeline__item__highlight : '';

  return (
    <div 
      className={clsx(styles.timeline__item, itemalign, highlightClass)}
      data-variant={variant}
    >
      <div
        className={clsx(
          styles.timeline__content,
          bgcolor,
          className,
          boxshadow,
          text,
          textType,
          textColor,
          textItalic,
          textDecoration,
          textBreak,
          textTruncate,
          textWeight
        )}
        style={style}
      >
        {children}
      </div>
    </div>
  );
};

export default TimelineItem;
