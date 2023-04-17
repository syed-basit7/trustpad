import React from 'react';
import Navbar from '../global-components/Navbar';
import Cards from '../section-components/Cards';
import Profile_Info from '../section-components/Profile_Info';

import img6 from '../../assets/img/img7.jpg';
import img7 from '../../assets/img/img3.jpg';
import img8 from '../../assets/img/img4.jpg';
import img9 from '../../assets/img/img11.jpg';
import img10 from '../../assets/img/com_logo.png';
import Activity_Card from '../section-components/Activity_Card';
import Footer from '../global-components/Footer';

const Profile = () => {
  return (
    <>
        <Navbar/>

        <div className='container mt-4'>
            <div className='row'>
                <div className='col-lg-6 my-3'>
                    <div className='profile-account-info p-4'>
                      <div className='text-white'>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div>
                              <h3 className='font-family theme-color'>Your account</h3>
                              <h5>WALLET ADDRESS</h5>     
                          </div>
                          <div>
                              <img src={img10} className='rounded-circle mx-auto' width={50} height={50}/>
                          </div>
                        </div>
                  
                          <div style={{overflow: 'hidden'}} className='p-2 my-4 px-3 wallet-address d-flex align-items-center'>
                            <div className='w-75'>
                              <h6 className='p-0 m-0 flex-wrap'>0xbe4Af1c7435cCE141Cc40AE26BBe4690190Aee69</h6>
                            </div>
                            <div className='w-25 text-end'>
                                <i className='material-icons text-white ms-3 cr-pointer'>content_copy</i>
                            </div>
                          </div>
                          <div className='max-staked my-4 text-center d-flex align-items-center justify-content-evenly'>
                              <div>
                                  <h3 className='theme-color p-0 m-0'>0 TPAD</h3>
                                  <div className='text-white-50'>
                                    <h6 className='p-0 m-0 mt-2 d-flex align-items-center '>Max staked <i className='ms-2 material-icons fs-5'>calendar_month</i></h6>
                                  </div>
                              </div>
                              <div>
                                  <h3 className='theme-color p-0 m-0'>NONE <small><sub>[0x]</sub></small></h3>
                                  <div className='text-white-50'>
                                    <h6 className='p-0 m-0 mt-2'>Your level and multiplier</h6>
                                  </div>
                              </div>
                          </div>
                          <div className='mt-5'>
                            <p>Stake <b> 3 000 TPAD more</b> to reach the next level with <b>20% chance to get an allocation.</b></p>
                          </div>
                          <div className='mt-4'>
                              <h6 className='font-family'>NONE</h6>
                              <div class="progress mt-1 mb-3" style={{height: '8px'}}>
                                  <div class="progress-bar bg-warning" role="progressbar" style={{width : '80%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                              <div className='w-100 text-end'>
                                  <h6 className='text-white p-0 m-0 font-family'>CHANCE</h6>
                                  <h6 className='text-warning p-0 m-0'>3 000 TPAD</h6>
                              </div>
                            <div className='text-center mt-3'>
                              <button className='px-4 buy-tpad-btn btn btn-primary text-white'>
                              <img src='https://trustpad.io/_next/static/media/pancakeswap.b5559135.svg' width={25} /> <span className='ms-2'> Buy TPAD</span></button>
                            </div>
                            <h4 className='theme-color mt-4 font-family'>1 BUSD = 10 CSTR</h4>
                          <h6 className='theme-color font-family'>1 CSTR = 0.1 BUSD</h6>
                          </div>
                      </div>
                    </div>
                </div>

              <div className='col-lg-6 my-3'>
                  <div className='sol-wallet p-4'>
                      <div className='d-flex'>
                          <img  src={img10} className='rounded-circle' height={75} width={75}/>
                          <div className='text-white ms-3'>
                              <h3 className='font-family'>CORESTARTER</h3>
                              <h6 className='font-family text-white-50'>CSTR / BUSD</h6>
                              <span className='badge rounded-pill bg-secondary'>Register</span>
                              <span className='badge rounded-pill bg-success ms-2'>Levels</span>
                              <span className='badge rounded-pill bg-warning text-dark ms-2'>KYC</span>
                          </div>
                      </div>
                      <div className='p-3  text-white my-4 sol-wallet-detail'>
                          <div className='my-2 d-flex align-items-center justify-content-between'>
                            <h6>Register as</h6>
                            <h5>CLUB<sub>[3x]</sub> </h5>
                          </div>
                          <div className='my-2 d-flex align-items-center justify-content-between'>
                            <h6>Allocated</h6>
                            <h5 className='theme-color'>TBA</h5>
                          </div>
                          <div className='my-2 d-flex align-items-center justify-content-between'>
                            <h6>SOL Wallet</h6>
                            <h5><i className='material-icons border border-secondary p-1 rounded-3'>edit</i></h5>
                          </div>
                      </div>
                      <div className='p-3 sol-wallet-address'>
                          <h6 className='text-white-50'>Your SOL wallet address for distribution</h6>
                          <div style={{overflow: 'hidden'}} className='p-2 px-3 wallet-address d-flex align-items-center'>
                            <div className='w-75'>
                              <h6 className='p-0 m-0 flex-wrap'>0xbe4Af1c7435cCE141Cc40AE26BBe4690190Aee69</h6>
                            </div>
                            <div className='w-25 text-end'>
                                <i className='material-icons text-success ms-3 cr-pointer'>done</i>
                            </div>
                          </div>
                          <p className='text-secondary mt-2'>We recommend using the Phantom (dekstop-only) or TrustWallet (mobile) wallets.</p>
                          <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label text-white" for="exampleCheck1">I confirm providing a valid SOL address. I nderstand that giving a wrong wallet can result in funds loss,</label>
                          </div>
                          <div className='text-center'>
                            <button className='px-4 btn btn-primary buy-tpad-btn rounded-3 text-white'>submit</button>
                          </div>
                      </div>
                          
                  </div>
              </div>

            </div>
        </div>

        {/* <Profile_Info/> */}
             {/* other links in profile page */}
        <div className='container'>
            <h2 className='mt-5 text-white'>Your History</h2>
            <hr className='bg-secondary'/>
            <div className='my-4 d-flex align-items-center justify-content-between'>
                <a href='#' className='text-secondary mx-0 ms-2 text-decoration-none'>On Sale
                <span className='badge ms-2 bg-success p'>652</span> </a>
                <a href='#' className='text-secondary mx-0 ms-2 text-decoration-none'>Activity
                <span className='badge ms-2 bg-primary p'>652</span></a>
                <a href='#' className='text-secondary mx-0 ms-2 text-decoration-none'>Owned
                <span className='badge ms-2 bg-info p'>652</span></a>
            </div>
            <hr className='bg-secondary'/>

            <div className='row my-5'>
              <div className='col-md-4 my-3'>
                  <Activity_Card img={img9}/>
              </div>
              <div className='col-md-4 my-3'>
                  <Activity_Card img={img6}/>
              </div>
              <div className='col-md-4 my-3'>
                  <Activity_Card img={img7}/>
              </div>
            </div>
        </div>
        <Footer/>

      
    </>
  );
}

export default Profile;
