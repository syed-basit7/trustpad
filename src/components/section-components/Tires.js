import React from 'react';
import img from '../../assets/img/img11.jpg';
import logo from '../../assets/img/com_logo.png';
import { Link } from 'react-router-dom';


const Tires = () => {
  return (
    <>
        <Link to='/poolDetail' className='text-decoration-none'>
            <div className='tires-card p-4'>
                <div className='d-flex align-items-center'>
                    <div className='w-75'>
                        <h4 className='text-white font-family p-0 m-0'>Wasted Lands</h4>
                        <h6 className='text-white-50 mt-1 p-0 m-0'>$PLAYZAP</h6>
                    </div>
                    <div className='w-25 text-end'>
                        <img src={logo} width={75} height={75} className='rounded-circle'/>
                    </div>
                </div>
                <div className=' my-1 mb-3'>
                    <i className='social-link material-icons m-0 fs-3 p-2 rounded-3 text-warning '>send</i>
                    <i className='social-link material-icons m-0 fs-3 p-2 rounded-3 text-warning ms-2'>language</i>
                    <i className='social-link material-icons m-0 fs-3 p-2 rounded-3 text-warning ms-2'>wifi</i>
                </div>
                <span className='badge bg-light rounded-pill text-dark'>ENDED</span>
                <p className='text-secondary my-4 '>The Wasted Land is a true Puzzle-RPG-Strategy game where players immerse themeselves in a</p>
                {/* social links */}
                <hr className='bg-secondary'/>
                <div className='d-flex my-3 align-items-center'>
                    <div className='w-25'>
                        <h6 className='text-white'>Total Rais</h6>
                    </div>
                    <div className='w-75 text-end'>
                        <h5 className='theme-color'>$270 01</h5>
                    </div>
                </div>
                <div className='d-flex my-3 align-items-center'>
                    <div className='w-25'>
                        <h6 className='text-white'>Starts</h6>
                    </div>
                    <div className='w-75 text-end'>
                        <h5 className='theme-color '>Dec 30, 12:30 UTC</h5>
                    </div>
                </div>
                <div className='d-flex my-3 align-items-center'>
                    <div className='w-25'>
                        <h6 className='text-white'>Price</h6>
                    </div>
                    <div className='w-75 text-end'>
                        <h6 className='theme-color '>1PLAYZAP  = 0.12BUSD</h6>
                    </div>
                </div>
                <hr className='bg-secondary'/>
                <div className='d-flex align-items-center mt-4'>
                    <div className='w-75'>
                        <h6 className='text-white'>finished 3 month, 8 days ago</h6>
                    </div>
                    <div className='w-25 text-end'>
                        <h6 className='theme-color '>80%</h6>
                    </div>
                </div>
                <div class="progress mt-1 bg-secondary mb-2" style={{height: '5px'}}>
                    <div class="progress-bar bg-warning" role="progressbar" style={{width : '80%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
             
                <div className='w-100 text-end mb-4'>
                    <h6 className='text-white p-0 m-0'>Listing Time</h6>
                    <h6 className='text-warning p-0 m-0'>TBA</h6>
                </div>
                <hr className='bg-secondary'/>
                <div className='text-white-50 text-center'>
                    <span className=''>KYC: <b>In Review</b>
                        <div class="spinner-border ms-2 spinner-border-sm" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </span>
                </div>
            </div>
        </Link>
    </>
  );
}

export default Tires;
