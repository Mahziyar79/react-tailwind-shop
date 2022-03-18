import { products } from "../data/Products";

const GetLowHighPrice = () => {
  return {
    min: Math.min.apply(
      Math,
      products.map(function (o) {
        return o.price;
      })
    ),
    max: Math.max.apply(
      Math,
      products.map(function (o) {
        return o.price;
      })
    ),
  };
};

export default GetLowHighPrice;
