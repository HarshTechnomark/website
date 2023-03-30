import React from 'react'
import './Button.css'


export interface IButtonProps {
  children?: React.ReactNode;
  props?: any;
  onClick?:
      | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
      | undefined;
}


const Button = (props: any) => {
  const classes = 'button ' + props.className;
  return (
    <button className={classes}>
      {props.children}
    </button>
  )
}

export default Button
