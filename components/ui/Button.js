import Link from 'next/link';

import classes from './button.module.css';

const Button = (props) => {
  // props.link -> Link Button
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }

  // else: Regular Button
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
