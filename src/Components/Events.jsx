import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Events(){
    
    const nav=useNavigate();

    return (
        <section>
        <div className=" text-white py-8" style={{backgroundColor:"#243b55"}}>
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="ml-2 text-yellow-300 uppercase tracking-loose font-semibold justify-center">Past Events</p>
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Reflecting on impact: Our successful events</p>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div
                    className="border-2 border-yellow-300 absolute h-full"
                    style={{ right: '50%', borderRadius: '1%' }}
                  ></div>
                  <div
                    className="border-2 border-yellow-300 absolute h-full"
                    style={{ left: '50%', borderRadius: '1%' }}
                  ></div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">1-6 May, 2021</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Capture the Flag (CTF) 2024</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      HACK-X kicked off HACKMIT-WPU’24 with an electrifying 8-hour Capture the Flag (CTF) event! 
                      Over 50 enthusiastic participants put their cybersecurity skills to the test,
                       tackling a range of challenges designed to push their boundaries.                      
                       </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-yellow-300">6-9 May, 2021</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Cyber Jagrookta</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Participate online. The links for your registered events will be sent to you via email and whatsapp groups. Use those links and show your talent.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">10 May, 2021</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Hackers event</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the results will be announced on the whatsapp groups and will be mailed to you.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-yellow-300">12 May, 2021</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">Osiris Workshop</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The winners will be contacted by our team for their addresses and the winning goodies will be sent at their addresses.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center"> <p class="mt-10 text-yellow-300">
                Behind every success, a team of champions
                <br />
                <button
    type="button"
    class="rounded-md border border-blue-900 px-3 py-2 text-sm font-semibold text-blue-950 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
    onClick={()=>nav('/Team')}>
  Know more about our team
  </button>
    </p> 
  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}