import React, { useState, useEffect } from 'react';
import Newsletter from './NewsLetter';
import { Footer } from './Footer';
import { TeamEvents } from './TeamEvents';
import Events from './Events';
import { useNavigate } from 'react-router-dom';
import cyber from './Hackx.jpg'



const Landingpg=()=>{
 const nav=useNavigate();
 const goContact=()=>{
  nav('ContactUs')
 }
    
return(
<>
<div className="relative w-full">

  <img
    className="w-full rounded-lg bg-gray-50 object-cover lg:h-[500px] lg:object-center"
    src={cyber}
    alt=""
  />


  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
    <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
      Hack X
    </h1>
    <h3 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
      The Official Cybersecurity Club of MIT-WPU
    </h3>
    <p className="mt-4 text-lg font-bold text-gray-300">
      Empowering individuals with cybersecurity knowledge
    </p>
  </div>
</div>

  <div className="mx-auto my-12 w-full px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
    <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
      <div>
        <h3 className="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
        <p className="mt-4 text-sm text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div>
        <h3 className="mt-8 text-lg font-semibold text-black">Fast & Easy to Load</h3>
        <p className="mt-4 text-sm text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div>
        <h3 className="mt-8 text-lg font-semibold text-black">Light & Dark Version</h3>
        <p className="mt-4 text-sm text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div>
        <h3 className="mt-8 text-lg font-semibold text-black">Filter Blocks</h3>
        <p className="mt-4 text-sm text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
    </div>
  </div>

  <section className="mx-auto w-full bg-gray-50 px-2 py-10 md:px-0">
    <div>
      <div className="mx-auto w-full lg:text-center">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
        </p>
      </div>
      <div class="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
        <div>
          <h2 class="text-xl font-semibold text-black">
            How do I get started?
          </h2>
          <p class="mt-6 text-sm leading-6 tracking-wide text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aliquam adipisci iusto aperiam? Sint asperiores sequi nobis
            inventore ratione deleniti?
          </p>
        </div>
        <div>
          <h2 class="text-xl font-semibold text-black">
            How do I get started?
          </h2>
          <p class="mt-6 text-sm leading-6 tracking-wide text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aliquam adipisci iusto aperiam? Sint asperiores sequi nobis
            inventore ratione deleniti?
          </p>
        </div>
        <div>
          <h2 class="text-xl font-semibold text-black">
            How do I get started?
          </h2>
          <p class="mt-6 text-sm leading-6 tracking-wide text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aliquam adipisci iusto aperiam? Sint asperiores sequi nobis
            inventore ratione deleniti?
          </p>
        </div>
        <div>
          <h2 class="text-xl font-semibold text-black">
            How do I get started?
          </h2>
          <p class="mt-6 text-sm leading-6 tracking-wide text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aliquam adipisci iusto aperiam? Sint asperiores sequi nobis
            inventore ratione deleniti?
          </p>
        </div>
      </div>
      <div className="flex justify-center"> <p class="mt-10 text-gray-600">
      Can't find what you're looking for?{" "}
      <button
  type="button"
  class="inline-flex items-center rounded-md bg-black px-1.5 py-1 text-sm font-semibold text-white hover:bg-black/80"
  onClick={goContact}
>
 Contact Us
  </button>
    </p>
 
  
  </div>

    </div>
  </section>

  <div className="mx-auto my-12 w-full px-2 py-2 md:my-24 lg:my-32 lg:px-0">
<Events/>
    {/* <TeamEvents/> */}
  </div>

  <section className="relative overflow-hidden border-t py-10">
    <div className="relative z-10 mx-auto w-full px-4">
      <div className="-m-6 flex flex-wrap">
        <div className="w-full p-6 md:w-1/2 lg:w-5/12">
          <div className="flex h-full flex-col justify-between">
            {/* Content */}
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  </section>


</>
)
}
export default Landingpg;