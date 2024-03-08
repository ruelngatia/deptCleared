import React from "react";
import { PricingCardInterface } from "../models/PricingCardInterface";
import { Auth } from "../services/Auth";
import { toast } from "react-toastify";
import { LoginModel } from "../models/LoginModel";
import { useNavigate } from "react-router-dom";

export const PricingCard: React.FC<PricingCardInterface> = ({
  title,
  amount,
  recommended,
  features,
}): JSX.Element => {
  const navigator = useNavigate()
  
  const makePayment = ()=>{
    const auth = window.localStorage.getItem('auth')
    if(auth==null) return navigator('/signin')
    const user: LoginModel = JSON.parse(auth);
   
    new Auth().makePayment({ 
      plan: user.plan,
      user_id: user.user._id,
      site: window.location.hostname
    }).then((res)=> {
      window.location.href = res
    }).catch(() => toast.error("unable to make payment"))
  }

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14">
        {recommended ? (
          <p className="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
            Recommended
          </p>
        ) : (
          ""
        )}
        <span className="mb-5 block text-xl font-medium text-dark dark:text-white">
          {title}
        </span>
        <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
          <span className="text-xl font-medium">£</span>
          <span className="-ml-1 -tracking-[2px]">{amount}</span>
          <span className="text-base font-normal text-body-color dark:text-dark-6">
            / Month
          </span>
        </h2>
        <div className="mb-[50px]">
          <h5 className="mb-5 text-lg font-medium text-dark dark:text-white">
            Features
          </h5>
          <div className="flex flex-col gap-[14px]">
            {
                features.map((feature) => <p className="text-base text-body-color dark:text-dark-6">
                {feature}
              </p>)
            }
          </div>
        </div>
        <a
          // href="javascript:price_2()"
          onClick={makePayment}
          className="inline-block rounded-md cursor-pointer bg-primary px-7 py-3 text-center text-base font-medium text-white transition hover:bg-blue-dark"
        >
          Purchase Now
        </a>
      </div>
    </div>
  );
};
