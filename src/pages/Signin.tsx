import React, { useState } from "react";
import { Banner } from "../componets/Banner";
import { Auth } from "../services/Auth";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";

export default function Signin() {
  const [username, setUsename] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const signIin = async () => {
    setLoading(true);
    window.localStorage.setItem('username',username??'');
    new Auth()
      .signin({ username, password })
      .then((res) => {
        navigate("/otp");
        toast.success("Successful login");
      })
      .catch((error) => {
        if (error.response.status) {
          setError(true);
        } else {
          toast.error("Some error occured");
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <Banner title="Sign in" currentPage="Sign in" />
      <section
        id="formDiv"
        className="bg-[#F4F7FF] py-14 lg:py-20 dark:bg-dark"
      >
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white dark:bg-dark-2 py-14 px-8 text-center sm:px-12 md:px-[60px]"
                data-wow-delay=".15s"
              >
                <div className="mb-10 text-center"></div>
                <form id="loginForm" onSubmit={signIin}>
                  <div className="mb-[22px]">
                    <input
                      id="username"
                      type="username"
                      placeholder="username"
                      required
                      onChange={(event) => setUsename(event.target.value)}
                      className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                  <div className="mb-[22px]">
                    <input
                      id="password"
                      type="password"
                      placeholder="Password"
                      required
                      onChange={(event) => setPassword(event.target.value)}
                      className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                  <div className="output" id="output"></div>
                  <p id="response"></p>
                  <div className="flex justify-center items-center">
                    <div
                      id="loader"
                      className="loader"
                      style={{ margin: "10px 0" }}
                    ></div>
                  </div>
                  <div className="mb-9">
                    {loading ? (
                      <CircularProgress color="success" />
                    ) : (
                      <input
                        id="submit"
                        type="button"
                        onClick={() => signIin()}
                        value="Sign In"
                        className="w-full px-5 py-3 text-base text-white transition duration-300 ease-in-out border rounded-md cursor-pointer border-primary bg-primary hover:bg-blue-dark"
                      />
                    )}
                  </div>
                  {error ? (
                    <p className="text-red-500">Wrong Password or username</p>
                  ) : (
                    ""
                  )}
                </form>

                <p className="text-base text-body-secondary">
                  Not a member yet?
                  <a
                    href="signup.html"
                    className="text-primary hover:underline"
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
