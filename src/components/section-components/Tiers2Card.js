import React from 'react'



const Tiers2Card = (props) => {
  return (
    <>
        <div className='tiers-2-card rounded-2 text-center'>
            <h5 className='text-white mb-4 pt-4 font-family'>TIERS {props.count}</h5>
            <img  src={props.img} width={150}/>
            <h4 className='mt-4 font-family theme-color'>{props.title}</h4>
            <hr className='bg-secondary'/>
            <div className='p-4'>
              <div>
                <p className='text-white-50'>Staking Requirements</p>
                <h5 className='text-white'>20,000 TPad</h5>
              </div>
              <hr className='bg-secondary'/>
              <div>
                <p className='text-white-50'>Allocation Type</p>
                <h5 className='text-white'>Lottery (100 Among all)</h5>
              </div>
              <hr className='bg-secondary'/>
              <div>
                <p className='text-white-50'>Pool Weight</p>
                <h5 className='text-white'>05</h5>
              </div>
            </div>
        </div> 
    </>
  )
}

export default Tiers2Card
