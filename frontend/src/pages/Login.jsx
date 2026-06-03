import React from 'react'

const Login = () => {

  const [state,setState] = React.useState('Sign Up')

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }
  return (
    <form className='min-h-[80vh] flex items-center ' >
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "sign up" : "log in"} to book appointment</p>
        {
          state === "Sign Up" &&  <div className='w-full'>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your full name' />
        </div>
        }
       
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
        {
          state === 'Sign Up' 
          ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary cursor-pointer underline'>Login here</span></p> 
          : <p>Create an new account? <span onClick={() => setState('Sign Up')} className='text-primary cursor-pointer underline'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login