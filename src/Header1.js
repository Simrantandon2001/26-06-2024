
import React from 'react'
import Header from './Header'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Landingpage from './Landingpage'
import Login from './Login'
const Header1 = () => {
  return (
	  <GoogleOAuthProvider clientId="110556347145-1sehcpdghgh801c1jgb62s02ns8f2a4k.apps.googleusercontent.com">
		  <Header />
		  <Landingpage />
		  <Login/>
	  </GoogleOAuthProvider>
  )
}
export default Header1;