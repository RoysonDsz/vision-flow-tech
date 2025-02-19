import  { useEffect, useRef } from "react";
import '../App.css'
import "./ImageTextTransition.css";
import logo from "../assets/logo.png";


const Herosec = () => {
  const textRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    textRefs.current.forEach((el) => {
      if (el) {
        const child = el.children[0] as HTMLDivElement;
        el.style.width = `${child.clientWidth}px`;
      }
    });
  }, []);

  return (
    <>
    <div className="relative w-full min-h-screen flex items-center bg-[#000000] overflow-hidden font-montserrat text-white py-10 sm:py-16">

      {/* Logo Section */}
      <a href="/" className="md:hidden absolute top-2 left-2 sm:top-4 sm:left-4 flex items-center">
  <img src={logo} alt="Logo" className="m-5 h-20 sm:h-15 md:h-16 lg:h-20 w-auto" />
</a>



      {/* Background Scrolling Text */}
      <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden z-0 skew-y-[-5deg]">

        <div
          ref={(el) => (textRefs.current[0] = el)}
          className="animate-scrollNormal whitespace-nowrap flex pb-10"
        >
          <span className="text-[300px] font-extrabold uppercase inline-block leading-[0.75] text-transparent stroke-2 text-stroke">
            Vision Flow Tech&nbsp;
          </span>
          <span className="text-[300px] font-extrabold uppercase inline-block leading-[0.75] text-transparent stroke-2 text-stroke">
          Vision Flow Tech&nbsp;
          </span>
        </div>
        <div
          ref={(el) => (textRefs.current[1] = el)}
          className="animate-scrollReverse whitespace-nowrap flex"
        >
          <span className="text-[300px] font-extrabold uppercase inline-block leading-[0.75] text-transparent stroke-2 text-stroke">
            Vision Flow Tech&nbsp;
          </span>
          <span className="text-[300px] font-extrabold uppercase inline-block leading-[0.75] text-transparent stroke-2 text-stroke">
          Vision Flow Tech&nbsp;
          </span>

        </div>

      </div>
            {/* Background Scrolling Text for mobiles */}
<div className="md:hidden absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden z-0 skew-y-[-5deg]">

<div
  ref={(el) => (textRefs.current[0] = el)}
  className="animate-scrollNormal whitespace-nowrap flex pb-20"
>
  <span className="text-[300px] font-extrabold uppercase inline-block leading-[0.75] text-transparent stroke-2 text-stroke">
    Vision Flow Tech&nbsp;
  </span>
  <span className="text-[300px] font-extrabold uppercase inline-block leading-[0.75] text-transparent stroke-2 text-stroke">
  Vision Flow Tech&nbsp;
  </span>
</div>
<div
  ref={(el) => (textRefs.current[1] = el)}
  className="animate-scrollReverse whitespace-nowrap flex"
>
  <span className="text-[300px] font-extrabold uppercase inline-block leading-[0.75] text-transparent stroke-2 text-stroke">
    Vision Flow Tech&nbsp;
  </span>
  <span className="text-[300px] font-extrabold uppercase inline-block leading-[0.75] text-transparent stroke-2 text-stroke">
  Vision Flow Tech&nbsp;
  </span>

</div>

</div>

      {/* Content */}
      <div className="absolute top-[40%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] px-4 z-10 text-center">
  <div className="max-w-screen-xl mx-auto">
    <h1 className="text-[36px] sm:text-[35px] md:text-[50px] lg:text-[90px] font-extrabold leading-tight shimmering-text">
      VISION FLOW
    </h1>
    <h1 className="text-[36px] sm:text-[35px] md:text-[50px] lg:text-[90px] font-extrabold leading-tight shimmering-text-two">
      TECHNOLOGIES
    </h1>
    <p className="text-[18px] sm:text-[22px] md:text-[28px] lg:text-[35px] font-xl leading-tight">
      Smooth Technology, Clear Vision
    </p>
  </div>
</div>
    </div>
    
  </>
  );
};

export default Herosec;
