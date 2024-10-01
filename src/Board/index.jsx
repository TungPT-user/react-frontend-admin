import "bootstrap/dist/css/bootstrap.css";
import { ProductContext } from "../Data/ProductContext";
import { useContext, useEffect, useState } from "react";
import { deletePhones, deleteData } from "../Data/Services";
const Board = () => {
  const productCtx = useContext(ProductContext);

  const [phones, setPhones] = useState({});
  const handleDeleteProduct = async (productToDelete) => {
    try {
      const deletedData = await deleteData(productToDelete.id);

      if (deletedData.success) {
        const updatedProducts = productCtx.phones.filter(
          (product) => product.id !== productToDelete.id
        );
        productCtx.setPhones(updatedProducts);
      } else {
        console.log("Xóa sản phẩm không thành công.");
      }
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
    }
  };
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
        <h2>Phones</h2>
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
            {productCtx.phones.map((product) => (
              <tr>
                <td>{product.id}</td>
                <td>{product.brand}</td>
                <td>
                  <img src={product.img1} alt="" />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => handleDeleteProduct(product)}>
                    DEL
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Board;
