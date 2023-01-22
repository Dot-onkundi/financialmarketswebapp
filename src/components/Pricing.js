import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import {MdShowChart} from 'react-icons/md'
import { GiChart } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Pricing</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                  </div>
                            <h3>Fxnomics</h3>
                            <h4>$5</h4>
                            <p>per day</p>
                            <ul className='pricing__container-features'>
                                <li> Virtual trading sessions</li>
                                <li>Technical updates</li>
                                <li>Fundamental updates</li>
                                <li> Live market news</li>

                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>Choose plan </Button>



                        </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />

                  </div>
                            <h3>Starter</h3>
                            <h4>$200</h4>
                            <p>Per month</p>
                            <ul className='pricing__container-features'>
                                <li> Includes full course</li>
                                <li>No challanges</li>
                                <li>No drawdown limits</li>
                                <li> Unlimited resets</li>

                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='blue'>Choose plan </Button>



                        </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiChart />

                  </div>
                            <h3>Technical Course</h3>
                            <h4>$999</h4>
                            <p>Unlimited access</p>
                            <ul className='pricing__container-features'>
                                <li> Introduction to markets</li>
                                <li>Technical patterns</li>
                                <li>Insigt into our trading strategy</li>
                                

                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>Choose plan </Button>
                        </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <MdShowChart />

                  </div>
                            <h3>Fundamentals Course</h3>
                            <h4>$399</h4>
                            <p>Unlimited access</p>
                            <ul className='pricing__container-features'>
                                <li> Technicals vs Fundamentals</li>
                                <li>Felix fundamental strategy</li>
                                <li>Insights on risk on and risk off </li>
                                
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='blue'>Choose plan </Button>



                        </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;