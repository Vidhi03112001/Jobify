import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import {Logo} from '../components';
 const Landing = () => {
  return(
  <Wrapper>
   <nav>
    <Logo/>
    {/* <img src={logo} alt="jobify" className="logo"/> */}
   </nav>
   <div className="container page">
    <div className="info">
      <h1>Let's <span>find</span> a job</h1>
      <p> This Jobify Application is created to provide a platform for job seekers to find the job opportunities that match their skills and preferences.
       <br> Make your job search easy and effective.
        >/p>
      <Link to="/register" className='btn register-link'>Register</Link>
      <Link to="/login" className='btn'>Login / Demo User</Link>
    </div>
    <img src={main} alt="job hunt" className='img main-img' />
   </div>
  </Wrapper> 
  );
};

export default Landing;
