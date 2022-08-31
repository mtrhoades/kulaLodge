// Imports
import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';


// Functional Component
const Login = () => {
// Vanilla JS section:

// useState section
const [credentials, setCredentials] = useState({
    email: '',
    password: ''
});


// Submit Function (authentication/authorization)




// JSX section
  return (
    <div>
        <h1>Welcome</h1>

        <div className='username' style={{paddingBottom: '10px'}}>
            <label
                style={{paddingRight: '10px'}}
                for='user'
            >
                Username:
            </label>

            <input
                class='input user'
                type='text'
                placeholder='Enter Username'
                required
                value=''
            >
            </input>
        </div>

        <div className='password'>
            <label
                style={{paddingRight: '10px'}}
                for='password'
            >
                Password: 
            </label>

            <input
                class='input pw'
                type='text'
                placeholder='Enter Password'
                required
                value=''
            >
            </input>
        </div>
        
        {/* Link to sign up page */}
        <div style={{paddingTop: '10px'}}>
            Sign Up Here
        </div>

    </div>
  )
}

export default Login