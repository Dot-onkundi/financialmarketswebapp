import React from 'react';
import HeroSection from '../../HeroSection';

import {homeObjOne,} from './Data';
import './index.css'

function SignUp() {
  return (
    <>
    
    <HeroSection {...homeObjOne}/>
    
    </>
  )
}

export default SignUp;