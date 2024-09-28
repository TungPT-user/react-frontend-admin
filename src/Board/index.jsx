import "bootstrap/dist/css/bootstrap.css";
import { ProductContext } from "../Data/ProductContext";
import { useContext, useEffect, useState } from "react";
const Board = (products) => {
  const productCtx = useContext(ProductContext);

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    let updatedProductsList = [];
    if (products === "laptops") {
      updatedProductsList = productCtx.laptops;
    } else if (products === "headphones") {
      updatedProductsList = productCtx.headphones;
    } else {
      updatedProductsList = productCtx.phones;
    }
    setProductsList(updatedProductsList);
  }, [products, productCtx.laptops, productCtx.headphones, productCtx.phones]);

  return (
    <>
      <div className="container mt-3">
        <h2>Laptops</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Brand</th>
              <th>IMG</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {productCtx.laptops.map((product) => (
              <tr>
                <td>{product.id}</td>
                <td>{product.brand}</td>
                <td>
                  <img src={product.img1} alt="" />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>..............</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Board;
