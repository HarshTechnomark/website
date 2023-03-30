import React from 'react'
import Button from '../../../uiComponents/Button/Button'
import Card from '../../../uiComponents/Card/Card'
import classes from './CreateAccount.module.css'

type Props = {}

const CreateAccount = (props: Props) => {
  return (
    <Card className={classes.createAccount}>
      <p className={classes.first}>Create New Account(TM)</p>
      <p className={classes.second}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.est animi doloremque cum suscipit explicabo quia saepe magnam.</p>
      <Button className={classes.btn}>Add New Accounts</Button>
    </Card>
  )
}

export default CreateAccount