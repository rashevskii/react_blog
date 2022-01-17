import React from 'react'
import cl from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
  const classes = props.currentpage ? (cl.myBtn + " " + cl.pageCurrent) : cl.myBtn
  return (
    <button {...props} className={classes}>{children}</button>
  )
}

export default MyButton
