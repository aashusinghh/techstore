import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = ({ uniqueNo, ...curElem }) => {
  const { prod_id, name, image, price, category } = curElem;
  // console.log(image)

  //   const Wrapper = styled.section`
  //   // padding: 9rem 0;
  //   // background-color: ${({ theme }) => theme.colors.bg};

  //   figure {
  //     width: auto;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     position: relative;
  //     overflow: hidden;
  //     transition: all 0.5s linear;
  //     &::after {
  //       content: "";
  //       position: absolute;
  //       top: 0;
  //       left: 0;
  //       width: 0%;
  //       height: 100%;
  //       background-color: rgba(0, 0, 0, 0.5);
  //       transition: all 0.2s linear;
  //       cursor: pointer;
  //     }
  //     &:hover::after {
  //       width: 100%;
  //     }
  //     &:hover img {
  //       transform: scale(1.2);
  //     }
  //     img {
  //       max-width: 90%;
  //       margin-top: 1.5rem;
  //       height: 20rem;
  //       transition: all 0.2s linear;
  //     }

  //     .caption {
  //       position: absolute;
  //       top: 15%;
  //       right: 10%;
  //       text-transform: uppercase;
  //       background-color: ${({ theme }) => theme.colors.bg};
  //       color: ${({ theme }) => theme.colors.helper};
  //       padding: 0.8rem 2rem;
  //       font-size: 1.2rem;
  //       border-radius: 2rem;
  //     }
  //   }

  //   .card {
  //     background-color: #fff;
  //     border-radius: 1rem;

  //     .card-data {
  //       padding: 0 2rem;
  //     }

  //     .card-data-flex {
  //       margin: 2rem 0;
  //       display: flex;
  //       justify-content: space-between;
  //       align-items: center;
  //     }

  //     h3 {
  //       color: ${({ theme }) => theme.colors.text};
  //       text-transform: capitalize;
  //     }

  //     .card-data--price {
  //       color: ${({ theme }) => theme.colors.helper};
  //     }

  //     .btn {
  //       margin: 2rem auto;
  //       background-color: rgb(0 0 0 / 0%);
  //       border: 0.1rem solid rgb(98 84 243);
  //       display: flex;
  //       justify-content: center;
  //       align-items: center;

  //       &:hover {
  //         background-color: rgb(98 84 243);
  //       }

  //       &:hover a {
  //         color: #fff;
  //       }
  //       a {
  //         color: rgb(98 84 243);
  //         font-size: 1.4rem;
  //       }
  //     }
  //   }
  // `;
  return (
    <NavLink to={`/singleproduct/${prod_id}`}>
      <div className="card bg-para_color rounded-2xl">
        <figure
          className="w-auto flex justify-center items-center relative overflow-hidden transition-all ease-linear 
        duration-500
        after:content-0 after:absolute after:top-0 after:left-0 after:w-0 after:h-[100%] after:cursor-pointer 

        after:transition-all after:ease-linear 
        after:duration-200
        "
        >
          <img
            className="max-w-[90%] mt-5 h-80"
            src={image}
            alt={name}
            height={"100%"}
            width={"100%"}
          />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data py-0 px-8">
          <div className="card-data-flex my-8 mx-0 flex justify-center items-center">
            <h3 className="text-text capitalize ">{name}</h3>
            <p className="card-data--price text-helper">
              {<FormatPrice price={price} />}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
