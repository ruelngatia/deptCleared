import React, { useState } from "react";
import grid from "../assets/svg/grid.svg";
import { Banner } from "../componets/Banner";
import { signupModel } from "../models/Signup";
import { useLocation, useNavigate } from "react-router-dom";
import { Auth } from "../services/Auth";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import { AxiosError } from "axios";

export default function Signup() {
  const location = useLocation();
  const navigator = useNavigate();
  const [loading, setLoading] = useState<boolean>();
  const navigate = useNavigate();
  const [form, setForm] = useState<signupModel>({
    email: "",
    password: "",
    project: "debtcleared",
    site: location.pathname,
    username: ""
  });

  const signup = () => {
    setLoading(true);
    new Auth()
      .signup(form)
      .then((res) => {
        navigate("/signin");
        toast.success("Successful Sign up");
      })
      .catch((error: AxiosError) => {   
        
        if (error.response?.status == 400 ) {
          let message: any = error.response?.data
          toast.error(message.message ?? message.error);
        } else {
          toast.error('Some error occured');
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <Banner title="Sign up" currentPage="Sign up" />
      <section className="bg-[#F4F7FF] py-14 lg:py-[90px] dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp relative mx-auto max-w-[525px] overflow-hidden rounded-xl shadow-form bg-white dark:bg-dark-2 py-14 px-8 text-center sm:px-12 md:px-[60px]"
                data-wow-delay=".15s"
              >
                <div className="mb-10 text-center"></div>
                <form id="loginForm">
                  <div className="mb-[22px]">
                    <input
                      id="username"
                      onChange={(event) =>
                        setForm({ ...form, username: event.target.value })
                      }
                      type="text"
                      placeholder="username"
                      className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
                    />
                  </div>

                  <div className="mb-[22px]">
                    <input
                      id="email"
                      type="email"
                      onChange={(event) =>
                        setForm({ ...form, email: event.target.value })
                      }
                      placeholder="Email"
                      className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
                    />
                  </div>

                  {/* <div className="mb-[22px]">
                    <input
                      id="Company"
                      type="text"
                      onChange={(event) =>
                        setForm({ ...form, company: event.target.value })
                      }
                      placeholder="Company name"
                      className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
                    />
                  </div> */}

                  <div className="mb-[22px]">
                    <input
                      id="password"
                      type="password"
                      onChange={(event) =>
                        setForm({ ...form, password: event.target.value })
                      }
                      placeholder="Password"
                      className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
                    />
                  </div>

                  <div className="mb-9">
                    {loading ? (
                      <CircularProgress color="success" />
                    ) : (
                      <input
                        type="button"
                        onClick={signup}
                        value="Sign Up"
                        className="w-full px-5 py-3 text-base text-white transition duration-300 ease-in-out border rounded-md cursor-pointer border-primary bg-primary hover:bg-blue-dark"
                      />
                    )}
                  </div>

                  <p id="response"></p>
                  <div className="flex justify-center items-center">
                    <div
                      id="loader"
                      className="loader"
                      style={{ margin: "10px 0" }}
                    ></div>
                  </div>
                </form>

                <p className="mb-4 text-base text-body-secondary">
                  By creating an account you agree to our
                  <br />
                  <a
                    href="javascript:void(0)"
                    className="text-primary hover:underline"
                  >
                    Privacy 
                  </a>
                  <span>  </span>
                  <a
                    href="javascript:void(0)"
                    className="text-primary hover:underline"
                  >
                    Policy
                  </a>
                </p>

                <p className="text-base text-body-secondary">
                  Already have an account?
                  <a
                    onClick={() => navigator("/signin")}
                    className="text-primary hover:underline"
                  >
                    Sign In
                  </a>
                </p>

                <div>
                  <span className="absolute top-1 right-1">
                    <img src={grid} alt="coner" />
                  </span>
                  <span className="absolute left-1 bottom-1">
                    <img src={grid} alt="coner" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
