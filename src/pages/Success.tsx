import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import './Styling/Success.css'

export default function Success() {

    const navigator = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigator('/');
        }, 2500); 
        return () => clearTimeout(timeout);
      }, [navigator]); 

  return (
    <div className="bg-[#EBF0F5] text-center py-36">
      <div className="card ">
        <div
        className="flex justify-center items-center"
          style={{
            borderRadius: "200px",
            height: "200px",
            width: "200px",
            background: "#F8FAF5",
            margin: "0 auto",
          }}
        >
          <i className="checkmark text-[#9ABC66] text-9xl">✓</i>
        </div>
        <h1 className="text-[#88B04B] text-3xl font-bold mb-3">Success</h1>
        <p className="text-[#404F5E] text-xl">
          We received your payemt;
          <br />{" "}
        </p>
      </div>
    </div>
  );
}
