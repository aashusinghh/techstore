import { useProductContext } from "../context/productcontex";
import Product from "./Product";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
  console.log(featureProducts);

  if (isLoading) {
    return <div> ......Loading </div>;
  }

  return (

    <div className="py-36 px-0 bg-bg">
      <div className=" max-w-[120rem] my-0 mx-auto">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Products</div>
        <div className="grid grid-cols-3 gap-8">
          {featureProducts.map((curElem, index) => {
            return (
              <Product key={curElem.id} {...curElem} uniqueNo={index + 1} />
            );
          })}
        </div>
      </div>
    </div>
  
  );
};



export default FeatureProduct;
