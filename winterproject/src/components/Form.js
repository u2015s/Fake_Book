import React from 'react';
import fakebook from './fakebook.svg';
import './Form.css';

function App() {
  return (
    <div>
    <div className="App bg-blue br-pill shadow-5">
        <img src={fakebook} className="App-logo bg-dark-blue" alt="logo" />
    </div>

    <div className='search pt5 mv2 tc br-pill bg-light-green shadow-5 '>
      <input className='mb3 tc pa2 ph5 br-pill' type='text' placeholder='Phone number or email address '></input>
      <br></br>
      <input className='tc mb4 pa2 ph5 br-pill' type='text' placeholder='Password'></input>
      <br></br>
       <button className='tc mb3 bg-blue br4 pa2 mr2 ba bw2 pointer'>
         <a className='link hover-dark-red f5 lh-copy dark-blue' href='#'>Log in</a>
         </button>
       <br></br>
       <a href='#' className=' link b mb3 f5 lh-copy dark-blue hover-dark-red'>Forgot Password</a>
    </div>
     <h3 className='tc'>or</h3>
    <div className='tc br-pill bg-light-purple shadow-5'>
    <button className='tc mv3 bg-blue br4 pa2 mr2 ba bw2 pointer '>
      <a className='link f5 lh-copy hover-dark-red dark-blue' href='#'>Create new account</a>
      </button>
    </div>
    </div>

  );
}

export default App;
