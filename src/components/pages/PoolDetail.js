import React from 'react'
import Navbar from '../global-components/Navbar'
import Footer from '../global-components/Footer'
import img10 from '../../assets/img/com_logo.png';
import partner from '../../assets/img/part1.png';

const PoolDetail = () => {
  return (
    <>
        <Navbar/>
        <div className='container my-4 mb-5'>
            <div className='row mb-5'>
                <div className='col-lg-5 my-3'>
                    <div className='sol-wallet p-4' style={{position: 'sticky', top: '110px'}}>
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
                      <div className='px-3 py-1  text-white my-3 sol-wallet-detail'>
                          <div className='my-2 d-flex align-items-center justify-content-between'>
                            <h6 className='p-0 m-0'>WhiteList</h6>
                            <h6 className='p-0 m-0 d-flex align-items-center'>None-WhiteListed 
                                <i className='material-icons text-danger ms-2'>close</i>
                            </h6>
                          </div>
                      </div>
                        <div className='px-3 py-2 sol-wallet-address'>
                            <div className='text-white-50 text-center'>
                                <span className=''>KYC: <b>In Review</b>
                                    <div class="spinner-border ms-2 spinner-border-sm" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className=' my-4'>
                            <h5 className=' theme-color'>1 BUSD = 8.333 PLAYZAP</h5>
                            <h6 className=' theme-color'>1 PLAYZAP = 0.12 BUSD</h6>
                        </div>
                        <div className='d-flex align-items-center mt-4'>
                            <div className='w-75'>
                                <h6 className='text-white'>registration closes in 9 hours, 43 minutes</h6>
                            </div>
                            <div className='w-25 text-end'>
                                <h6 className='theme-color '>80%</h6>
                            </div>
                        </div>
                        <div class="progress mt-1 bg-secondary mb-2" style={{height: '5px'}}>
                            <div class="progress-bar bg-white" role="progressbar" style={{width : '80%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
             
                        <div className='w-100 text-end mb-4'>
                            <h6 className='text-white p-0 m-0'>Listing Time</h6>
                            <h6 className='text-warning p-0 m-0'>0 / 2 249 921 PLAYZAP</h6>
                        </div>

                        <div>
                            <p className=' text-white d-flex align-items-center'>
                                <i className='material-icons'>wifi</i>
                                <span className='ms-2'> IDO and distribution on BNB Chain</span>
                            </p>
                        </div>
                        <div>
                            <div className='text-white d-flex my-2 align-items-center'>
                                <h6 className='p-0 m-0 w-25'>📝 Register	</h6>
                                <p className='p-0 m-0 ms-5 w-75'>	Apr 14, 14:00 – Apr 16, 11:00 UTC</p>
                            </div>
                            <div className='text-white d-flex my-2 align-items-center'>
                                <h6 className='p-0 m-0 w-25'>💰 Sale	</h6>
                                <p className='p-0 m-0 ms-5 w-75'>	Apr 16, 14:00 – Apr 17, 14:00 UTC</p>
                            </div>
                            <div className='text-white d-flex my-2 align-items-center'>
                                <h6 className='p-0 m-0 w-25'>🏃‍♂ FCFS</h6>
                                <p className='p-0 m-0 ms-5 w-75'>	Apr 17, 13:00 UTC</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-7 my-3'>
                    <div className='single-pool-detail p-3'>
                        <div className='d-flex flex-wrap align-items-center justify-content-between'>
                            <div className='d-flex align-items-center my-2'>
                                <img  src={img10} className='rounded-circle' height={75} width={75}/>
                                <h3 className='ms-3 text-white font-family'>CORESTARTER</h3>
                            </div>
                            <div className='d-flex align-items-center my-2'>
                                <img  src={partner} className='' width={150}/>
                            </div>
                        </div>
                        <p className='my-3 text-white-50'>The ZapVerse is a powerful ecosystem built and powered by proven solutions and infrastructure, providing a satisfying core experience to our users. Users will have a wide array of in-house and partnered games, played by thousands of people globally. Those low-skill-floor high-skill-ceiling games will provide value corresponsive to the player's skill level. With a truly free-to-play economy, the monetization aspect will come directly from the players interacting actively with each other, playing games, earning prizes and exchanging assets.</p>
                        <div className='my-4'>
                            <h5 className='theme-color font-family'>Pool Details</h5>
                            <div className='d-flex align-items-center w-100 mt-4'>
                                <div className='text-white w-50 d-flex align-items-center'>
                                    <b>Access Type:</b>
                                    <p className='p-0 m-0 ms-3'>Levels</p>
                                </div>
                                <div className='text-white w-50 d-flex align-items-center'>
                                    <b>Hard Cap:</b>
                                    <p className='p-0 m-0 ms-3'>$270 001</p>
                                </div>
                            </div>
                            <div className='text-white mt-4'>
                                <div className='d-flex align-items-center my-2'>
                                    <b>Swap Rate:</b>
                                    <p className='theme-color p-0 m-0 ms-3'>1 PLAYZAP = $0.12 | 8.333 PLAYZAP per 1 BUSD</p>
                                </div>
                                <div className='d-flex align-items-center my-2'>
                                    <b>Start/end:</b>
                                    <p className='p-0 m-0 ms-3'>16 Apr, 14:00 pm –17 Apr, 14:00 pm UTC</p>
                                </div>
                                <div className='d-flex align-items-center my-2'>
                                    <b>FCFS Opens:</b>
                                    <p className='p-0 m-0 ms-3'>Apr 17, 13:20 UTC</p>
                                </div>
                                <div className='d-flex align-items-center my-2'>
                                    <b>Base Allocation:</b>
                                    <p className='theme-color p-0 m-0 ms-3'>1x <span className='text-white'>=</span> $13.64</p>
                                </div>
                            </div>
                        </div>
                        <div className='my-4 mt-5'>
                            <h5 className='theme-color font-family'>Price</h5>
                            <div className='text-white '>
                                <div className='d-flex align-items-center my-2'>
                                    <b>Listing:</b>
                                    <p className='theme-color p-0 m-0 ms-3'>$0.12 (+0.00%)</p>
                                </div>
                                <div className='d-flex align-items-center my-2'>
                                    <b>IDO:</b>
                                    <p className='theme-color p-0 m-0 ms-3'>$0.12</p>
                                </div>
                            </div>
                        </div>
                        <div className='my-4 mt-5'>
                            <h5 className='theme-color font-family'>Token</h5>
                            <div className='text-white '>
                                <div className='d-flex align-items-center my-2'>
                                    <b>Token:</b>
                                    <p className='theme-color p-0 m-0 ms-3'>PlayZap (PLAYZAP) <small className='text-white'> on BNB Chain</small></p>
                                </div>
                                <div className='d-flex align-items-center my-2'>
                                    <b>Total Supply:</b>
                                    <p className='text-white p-0 m-0 ms-3'>150 000 000 PLAYZAP</p>
                                </div>
                                <div className='d-flex align-items-center my-2'>
                                    <b>Initial Supply:</b>
                                    <p className='test-white p-0 m-0 ms-3'>3 749 851 PLAYZAP, <span className='text-white'>market cap </span>$450 000</p>
                                </div>
                                <div className='d-flex align-items-center my-2'>
                                    <b>Token Listing:</b>
                                    <p className='text-white p-0 m-0 ms-3'>TBA</p>
                                </div>
                            </div>
                        </div>
                        <div className='my-4 mt-5'>
                            <h5 className='theme-color font-family'>Distribution</h5>
                            <div className='text-white '>
                                <div className='d-flex align-items-center my-2'>
                                    <b>Distribution:</b>
                                    <p className='text-white p-0 m-0 ms-3'>Claimed on TrustPad</p>
                                </div>
                                <div className='d-flex align-items-center my-2'>
                                    <b>Vesting:</b>
                                    <p className='text-white p-0 m-0 ms-3'>20% at listing, 1 month cliff, then 6 months linear vesting</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <Footer/>
    </>
  )
}

export default PoolDetail
