import React from "react";
import imageIntroM from './images/image-intro-mobile.jpg'
import imageIntroD from './images/image-intro-desktop.jpg'
import bgPatternIntroLeftM from "./images/bg-pattern-intro-left-mobile.svg"
import bgPatternIntroRightM from "./images/bg-pattern-intro-right-mobile.svg"
import bgPatternIntroLefttD from "./images/bg-pattern-intro-left-desktop.svg"
import bgPatternIntroRightD from "./images/bg-pattern-intro-right-desktop.svg"

const Body = () => {
  return ( 
    <div className="w-screen">
      <section className="relative md:flex">
        <div>
          <img src={imageIntroM} alt="" className="block w-full md:hidden"/>
          <img src={imageIntroD} alt="" className="hidden w-full md:block md:absolute md:right-0 md:w-2/6 md:z-10 md:mr-20 md:mt-24 lg:mr-44 lg:mt-20"/>
        </div>
        <hr className="hidden border-x border-white w-24 absolute top-20 left-24 z-30  lg:block"/>
        <div className="relative w-screen max-h-full bg-dark-violet text-white  text-center md:text-left lg:p-16 lg:pb-10  ">
          <img src={bgPatternIntroLeftM} alt="" className="block absolute left-0 top-0 md:hidden" />
          <img src={bgPatternIntroLefttD} alt="" className="hidden absolute left-0 -bottom-44 w-32 md:block" />
          <div className="py-16 px-10 md:w-5/6 md:m-auto">
            <h1 className="text-3xl mb-5 md:text-3xl w-3/6">Humanizing your insurance.</h1>
            <p className="mb-6 w-3/6">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find
              the plan that's right for you. Ensure you and your loved ones aree protected.
            </p>
            <button className="border-2 border-white px-4 py-2">VIEW PLANS</button>
          </div>

          <img src={bgPatternIntroRightM} alt="" className="block absolute right-0 -bottom-56 md:hidden" />
          <img src={bgPatternIntroRightD} alt="" className="hidden absolute right-0 top-0 md:block w-56" />
        </div>
      </section>
      <hr className="hidden border-x border-white w-24 absolute top-20 left-24 z-30  lg:block"/>
      
      <section className="sm:w-5/6 sm:m-auto">
        <h2>We're Different</h2>
      </section>


    </div>
   );
}
 
export default Body;