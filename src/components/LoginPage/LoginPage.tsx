import React from 'react'
import TimeUI from '../../UI/TimeUI/TimeUI'
import { useLoginPageStyle } from './style'

const LoginPage = () => {
  const {LoginPageSC} = useLoginPageStyle()
  return (
    <LoginPageSC>
      <TimeUI />
    </LoginPageSC>
  )
}

export default LoginPage