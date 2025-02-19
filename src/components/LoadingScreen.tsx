import { useEffect } from "react";
import '../App.css'

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  


  useEffect(() => {
    const totalDuration = 1500; 
    

    
    const timeout = setTimeout(() => {
      onFinish();
    }, totalDuration);

   
    return () => {

      clearTimeout(timeout);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-row-1 space-x-[50px] md:space-x-[90px] gap-3 animate-bounce items-center justify-center bg-black z-50">
     
      <span className=" md:h-[35px] md:w-[35px] h-[9px] w-[9px]   rounded-full bg-blue-800 opacity-90"/>
      <span className=" md:h-[35px] md:w-[35px] h-[9px] w-[9px] rounded-full bg-green-500 opacity-90"/>
      <span className=" md:h-[35px] md:w-[35px] h-[9px]  w-[9px] rounded-full bg-blue-50 opacity-90"/>
      <span className=" md:h-[35px] md:w-[35px] h-[9px] w-[9px] rounded-full bg-amber-300 opacity-90"/>

    </div>
  );
}
