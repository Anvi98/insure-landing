import React from "react";
import imageIntroM from './images/image-intro-mobile.jpg'
import imageIntroD from './images/image-intro-desktop.jpg'
import bgPatternIntroLeftM from "./images/bg-pattern-intro-left-mobile.svg"
import bgPatternIntroRightM from "./images/bg-pattern-intro-right-mobile.svg"

const Body = () => {
  return ( 
    <div>
      <section className="relative sm:flex">
        <div>
        <img src={imageIntroM} alt="" className="block w-full sm:hidden"/>
        <img src={imageIntroD} alt="" className="hidden w-full sm:block sm:absolute sm:right-0 sm:w-2/6 sm:z-10 sm:mr-60"/>
        </div>

        <div className="relative bg-dark-violet text-white  text-center sm:text-left">
          <img src={bgPatternIntroLeftM} alt="" className="absolute left-0" />
          <div className="py-16 px-4">
            <h1 className="text-3xl mb-5">Humanizing your insurance.</h1>
            <p className="mb-6">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find
              the plan that's right for you. Ensure you and your loved ones aree protected.
            </p>
            <button className="border-2 border-white px-4 py-2">VIEW PLANS</button>
          </div>

          <img src={bgPatternIntroRightM} alt="" className="absolute right-0 -bottom-56" />
        </div>
      </section>


    </div>
   );
}
 
export default Body;