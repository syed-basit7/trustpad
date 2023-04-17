import React from 'react';
import trading from '../../assets/img/trading.png';
import Footer from '../global-components/Footer';
import Navbar from '../global-components/Navbar';
import StakeTab from '../section-components/StakeTab';
import StakingFarm from '../section-components/StakingFarm';
import StakingClose from '../section-components/StakingClose';
import { Link , Outlet } from 'react-router-dom';


const Staking = () => {
  return (
    <>
        <Navbar/>
        <div className='container my-4'>
            <div className='row'>
                <div className='col-md-4 my-3'>
                    <div className='stack-count p-4'>
                        <h3 className='font-family text-white'>$0</h3>
                        <p className='text-white-50'>Total Value Locked</p>
                    </div>
                </div>
                <div className='col-md-4 my-3'>
                    <div className='stack-count p-4'>
                        <h3 className='font-family text-white'>3128 TPad</h3>
                        <p className='text-white-50'>Total Staked</p>
                    </div>
                </div>
                <div className='col-md-4 my-3'>
                    <div className='stack-count p-4'>
                        <h3 className='font-family text-white'>1</h3>
                        <p className='text-white-50'>Number of Stakers</p>
                    </div>
                </div>
            </div>
        </div> 
        <div className='mt-5 container p-5' style={{marginBottom: '300px'}} id='stack-main-card'>
            <div className='row'>
                <h3 className='text-white font-family'>Participate IGO/IDO Stake</h3>
                <hr className='bg-secondary mt-2 mb-3'/>
                <div className='col-md-6 my-3 d-flex align-items-center justify-content-between'>
                    <div>
                        <div className='d-flex flex-wrap justify-content-between'>
                            <button className='btn btn-outline-primary theme-color days-btn btn-md py-2 px-3  my-2'>7 days</button>
                            <button className='btn btn-outline-primary theme-color days-btn btn-md py-2 px-3 ms-2 my-2'>30 days</button>
                            <button className='btn btn-outline-primary theme-color days-btn btn-md py-2 px-3 ms-2 my-2'>180 days</button>
                            <button className='btn btn-outline-primary theme-color days-btn btn-md py-2 px-3 ms-2 my-2'>365 days</button>
                        </div>
                        
                        <div className='mt-4 d-flex align-items-center justify-content-between'>
                            <div>
                                <p className='my-1 text-white-50'>Lock Period: <b className='text-white'>30 Days</b></p>
                                <p className='my-1 text-white-50'>Re-locks on registration: <b className='text-white'>Yes</b></p>
                                <p className='my-1 text-white-50'>Early unstake fee: <b className='text-white'>7%</b></p>
                                <p className='my-1 text-white-50'>Status: <b className='text-white'>Unlocked</b></p>
                                <p className='my-1 text-white-50'>Yield: <b className='text-white'>0</b></p>
                            </div>
                            <div>
                                <p className='text-white-50 p-0 m-0'>APY Rate</p>
                                <h3 className='theme-color font-family'>40%</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 my-3'>
                    <div className='stack-form p-3'>
                        <p className='my-1 text-white-50'>Balance: <b className='text-white'>0 TPad</b></p>
                        <div className='mt-4 d-flex p-3 align-items-center py-0 border border-secondary rounded-1'>
                            <input type='text' placeholder='00.00' className='stack-input w-75 form-control bg-dark border-0 text-white p-3' />
                            <h6 className='theme-color mx-2 p-0 m-0'>MAX</h6>
                            <button className='btn btn-primary ms-3'>APROVE</button>
                        </div>
                        <p className='p-0 m-0 mt-4 text-white-50'>Staked: <b className='text-white'>0 TPad</b></p>
                        <div className='mt-4 d-flex p-3 align-items-center py-0 border border-secondary rounded-1'>
                            <input type='text' placeholder='00.00' className='stack-input w-75 form-control bg-dark border-0 text-white p-3' />
                            <h6 className='theme-color mx-2 p-0 m-0'>MAX</h6>
                            <button className='btn btn-primary ms-3'>WITHDRAW</button>
                        </div>

                        <div className='mt-4 p-4 reward-card'>
                            <h5 className='font-family text-white'>Pending Rewards</h5>
                            <h6 className='font-family theme-color'>0 TPad</h6>
                            <div className='text-end'>
                            <button className='btn btn-primary ms-3'>Claim</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className='shadow-round rounded-circle' style={{top: '1200px', right: '50px'}}></div>
        <Footer/>
    </>
  );
}

export default Staking;
