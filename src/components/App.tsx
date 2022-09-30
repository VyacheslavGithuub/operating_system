import React from 'react'
import LoginPage from './LoginPage/LoginPage'
import { useAppStyle } from './style'

const App: React.FC = () => {

const {AppSC} = useAppStyle()
  return (
    <AppSC>
      <LoginPage />
    </AppSC>
  )
}

export {App} 