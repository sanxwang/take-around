import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const TimeLine = ({
  className,
  style,
  children,
  variant,
}) => {
  const bgLineColor = variant ? styles[`timeline--${variant}`] : '';
  return (
    <div className={clsx(styles.timeline, bgLineColor, className)} style={style}>
      {children}
    </div>
  );
};

export default TimeLine;
