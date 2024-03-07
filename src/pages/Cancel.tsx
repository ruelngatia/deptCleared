import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Cancel() {

    const navigator = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigator('/');
        }, 2500); 
        return () => clearTimeout(timeout);
      }, [navigator]); 

  return (
    <div className='bg-[#EBF0F5] text-center py-36 flex justify-center items-center'>
        <div className="card bg-white p-16 w-fit">
        <div className="heart starterPosition enderPosition">
          <span className="swing">
            <em className="red-redcheck text-6xl text-[#f50]">!</em>
          </span>  
      </div>
        <h1 className='text-4xl text-[#f50]' >Failure</h1> 
        <p>Payment Trasaction failed<br/> </p>
      </div>
    </div>
  )
}
