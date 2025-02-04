import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <div className="py-36 px-0 bg-about_bg">
      <div className="max-w-[120rem] my-0 mx-auto">
        <div className="grid grid-cols-3 gap-8">
          <div className=" w-auto h-[30rem] flex flex-col justify-center items-center bg-service rounded-3xl">
            <div>
              <TbTruckDelivery className="icon w-32 h-32 p-8 bg-para_color text-icon_c rounded-[50%]" />
              <h3 className="mt-6 text-3xl text-white">
                Super Fast and Free Delivery
              </h3>
            </div>
          </div>

          <div className=" w-auto h-[30rem] flex flex-col justify-center items-center bg-service rounded-3xl">
            <div className="services-colum-2">
              <div>
                <MdSecurity className="icon w-32 h-32 p-8 bg-para_color text-icon_c rounded-[50%]" />
                <h3 className="mt-6 text-3xl text-white">
                  Non-contact Shipping
                </h3>
              </div>
            </div>
            <div className=" w-auto h-[30rem] flex flex-col justify-center items-center bg-service rounded-3xl">
              <div>
                <GiReceiveMoney className="icon w-32 h-32 p-8 bg-para_color text-icon_c rounded-[50%]" />
                <h3 className="mt-6 text-3xl text-white">
                  Money-back Guaranteed
                </h3>
              </div>
            </div>
          </div>

          <div className=" w-auto h-[30rem] flex flex-col justify-center items-center bg-service rounded-3xl">
            <div>
              <RiSecurePaymentLine className="icon w-32 h-32 p-8 bg-para_color text-icon_c rounded-[50%] " />
              <h3 className="mt-6 text-3xl text-white">
                Super Secure Payment System
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Wrapper = styled.section`


  .services-1,
  .services-2,
  .services-3 {
 
    align-content: center;

    text-align: center;
    // border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .services-2 {
    gap: 4rem;
    background-color: transparent;
    // background-color: #0B4141;
    box-shadow: none;

    
    }
  }

`;
export default Services;
