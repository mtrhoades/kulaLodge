import './App.css';
import { Link } from 'react-router-dom';

function App() {

    return (
      <div>
        
      <h1>Welcome</h1>

      <form action='' method='get'>
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
                  // required
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
                  // required
                  value=''
              >
              </input>
          </div>
              
          {/* submit button here, and for now take it to the dashboard page until we get login and sign up working with authentication and authorization */}
      </form>

      <div className='submitButton'>


          <Link
            to='/Dashboard'
          >

            <button 
              id='loginButton' 
              type='button'
            >
              Login
            </button>

          </Link>
      </div>

  </div>
  );
}

export default App;
