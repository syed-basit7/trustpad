import React from 'react';
import Footer from '../global-components/Footer';
import Navbar from '../global-components/Navbar';
import { Calendar, momentLocalizer  } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import terms_img from '../../assets/img/terms.png';
import img10 from '../../assets/img/com_logo.png';
import partner from '../../assets/img/part1.png';
import { Link } from 'react-router-dom';


function Calender_Page() {

  const events = [
    {
      start: new Date(2023, 3, 10, 10, 0),
      end: new Date(2023, 3, 10, 12, 0),
      title: 'Meeting with John',
    },
    {
      start: new Date(2023, 3, 15, 14, 0),
      end: new Date(2023, 3, 15, 15, 0),
      title: 'Call with Jane',
    },
    // ...
  ];
  const localizer = momentLocalizer(moment); // define the localizer variable here
// Get all elements with the class "rbc-event-content"
// Get all elements with the class "rbc-event-content"
const eventContentElements = document.querySelectorAll('.rbc-event-content');

// Loop through each element and add the desired attributes
for (let i = 0; i < eventContentElements.length; i++) {
  const element = eventContentElements[i];
  if (element.dataset) {
    element.dataset.bsToggle = 'modal';
    element.dataset.bsTarget = '#calender';
  } else {
    // If the dataset property is not supported, fall back to using setAttribute
    element.setAttribute('data-bs-toggle', 'modal');
    element.setAttribute('data-bs-target', '#calender');
  }
}

  return (
    <>
            <div className='shadow-round rounded-circle' style={{top: '250px', right: '50px'}}></div>
            <div className='shadow-round rounded-circle' style={{top: '500px', left: '50px'}}></div>
            <div className='shadow-round rounded-circle' style={{top: '800px', right: '50px'}}></div>
      <Navbar />

      <div className='shadow-round rounded-circle' style={{top: '1900px'}}></div>
      <div className='px-5 my-3'>
            <div id='terms-banner' className='px-5'>
                <div className='row'>
                    <div className='col-md-8 d-flex align-items-center justify-content-center'>
                        <div>
                            <h1 className='theme-color font-family'><span className='text-white'> LounchedPad </span>IGO Calender</h1>
                            <figcaption figcaption class="mt-2 blockquote-footer text-white mb-0 pb-0">
                                IGO Calender
                            </figcaption>
                        </div>
                    </div>
                    <div className='col-md-4  text-center'>
                        <img src={terms_img} width={'250'}/>
                    </div>
                </div>
            </div>
        </div> 
      <div className='container my-5'>
          <div className='calender-back p-5'>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              
              endAccessor="end"
              style={{ height: 500 }} />
              
          </div>
      </div>



<div class="modal fade" id="calender" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog bg-dark">
    <div class="modal-content bg-dark">
      {/* <div class="modal-header"> */}
        {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> */}
      <div class="modal-body">
        <h5 class="modal-title text-white" id="exampleModalLabel">IDO on TrustPad</h5>
          <div className='mt-4 d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                  <img  src={img10} className='rounded-circle' height={55} width={55}/>
                  <h4 className='ms-2 text-white font-family'>Nomad Exiles4 </h4>
              </div>
              <div className='d-flex align-items-center'>
                  <img  src={partner} className='' width={150}/>
              </div>
          </div>
          <p className='text-white-50 my-3'>The Nomad Exiles project is a vivid example of a modern approach to creating gaming metaverses. This is a full-fledged multiplayer online game that brings classic RPG gameplay and advanced lore with many secrets and plot twists to the world of blockchain games. But the game also has a variety of Play-to-Earn mechanics that allow every player to find a way to earn money that they will like: from selling game valuables in the form of NFT to receiving prize tokens for winning PvP battles.</p>
            <div className='d-flex align-items-center'>
              <a href="https://twitter.com/NomadExiles" target="_blank" class="text-main fs-4 theme-color mx-2" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a>
              <a href="https://t.me/NomadExiles" target="_blank" class="text-main fs-4 theme-color mx-2" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"></path></svg></a>
              <a href="https://t.me/NomadExilesChat" target="_blank" class="text-main fs-4 theme-color mx-2" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg></a>
              <a href="https://pridemetaverse.io/" target="_blank" class="text-main fs-4 theme-color mx-2" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg></a>
            </div>
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
            <div class="modal-footer border-0">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
      </div>
    </div>
  </div>
</div>


      <Footer />
    </>
  );
}

export default Calender_Page;
