import React, { useState } from "react";
import { Banner } from "../componets/Banner";
import { Auth } from "../services/Auth";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export default function Verication() {
  const [OTP, setOTP] = useState<string>("");
  const [isLoading, setIsloading] = useState<boolean>(false);
  const navigator = useNavigate();

  const verify = () => {
    const username = window.localStorage.getItem('username')??'';
    new Auth()
      .verifyOTP(username, OTP)
      .then((res) => {
        window.localStorage.setItem('auth',JSON.stringify(res))
        navigator("/reports");
        toast.success("Login successful");
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === 401) {
          toast.error("Invalid otp");
        } else {
          toast.error("Some error occured");
        }
      })
      .finally(() => setIsloading(false));
  };

  return (
    <div>
      <Banner title="Verify Account" currentPage="otp" />
      <section id="verification" style={{ margin: "50px 0", padding: "20px" }}>
        <form id="verificationForm">
          <div
            className="wow fadeInUp relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white dark:bg-dark-2 py-14 px-8 text-center sm:px-12 md:px-[60px]"
            data-wow-delay=".15s"
            style={{
              flexDirection: "column",
              columnGap: "10px",
              backgroundColor: "#fff",
              padding: "20px",
            }}
          >
            <input
              id="code"
              type="text"
              onChange={(event) => setOTP(event.target.value)}
              placeholder="Enter OTP code sent to your email"
              required
              style={{ textAlign: "center" }}
              className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
            />
            <p
              id="verificationResponse"
              style={{ color: "red", margin: "10px 0" }}
            ></p>
            {isLoading ? (
              <CircularProgress color="success" />
            ) : (
              <input
                id="verifyBtn"
                type="button"
                value="verify"
                onClick={verify}
                style={{ textAlign: "center", margin: "20px 0" }}
                className="w-full px-5 my-5 py-3 text-base text-white transition duration-300 ease-in-out border rounded-md cursor-pointer border-primary bg-primary hover:bg-blue-dark"
              />
            )}
          </div>
        </form>
      </section>
    </div>
  );
}
