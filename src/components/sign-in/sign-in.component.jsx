import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class SignIn extends React.Component{
  constructor(){
    super()
    this.state={
      email:'',
      password:''
    }
  }
  handleSubmit = e =>{
    e.preventDefault()
    this.setState({
      email:'',
      password:''
    })
  }
  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value})
  }
  render(){
    return(
      <div className="sign-in">
        <h2 className='title'>Have an account?</h2>
        <span>Sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type='email' 
            name='email' 
            value={this.state.email} 
            handleChange={this.handleChange} 
            label='EMAIL'
            required
          />
          <FormInput 
            type='password' 
            name='password' 
            value={this.state.password} 
            handleChange={this.handleChange} 
            label='PASSWORD'
            required
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
export default SignIn