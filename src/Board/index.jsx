import "bootstrap/dist/css/bootstrap.css";
import { ProductContext } from "../Data/ProductContext";
import { useContext, useEffect, useState } from "react";
import {
  deleteDataPhones,
  deleteDataLaptops,
  editDataPhones,
  editDataLaptops,
} from "../Data/Services";
import EditForm from "../UI/UX/EditForm";
const Board = () => {
  const productCtx = useContext(ProductContext);

  const [phones, setPhones] = useState({});
  const [laptops, setLaptops] = useState({});
  const [editingProduct, setEditingProduct] = useState(null);

  const handleDeletePhone = async (productToDelete) => {
    try {
      const deletedData = await deleteDataPhones(productToDelete.id);

      if (deletedData.success) {
        const updatedProducts = productCtx.phones.filter(
          (product) => product.id !== productToDelete.id
        );
        productCtx.setPhones(updatedProducts);
      } else {
        console.log("Xóa sản phẩm thành công.");
      }
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
    }
  };

  const rerenderPage = () => {
    window.location.reload();
  };
  const handleDeleteLaptop = async (productToDelete) => {
    try {
      const deletedData = await deleteDataLaptops(productToDelete.id);

      if (deletedData.success) {
        const updatedProducts = productCtx.laptops.filter(
          (product) => product.id !== productToDelete.id
        );
        productCtx.setLaptops(updatedProducts);
      } else {
        console.log("Xóa sản phẩm thành công.");
      }
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
    }
    rerenderPage();
  };

  const handleEditPhones = async (productToEdit) => {
    setEditingProduct(productToEdit);
    try {
      const editData = await editDataPhones(productToEdit.id);

      if (editData.success) {
        const updatedProducts = productCtx.phones.filter(
          (product) => product.id !== productToEdit.id
        );
        productCtx.setPhones(updatedProducts);
      } else {
        console.log("Xóa sản phẩm thành công.");
      }
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
    }
  };

  const handleEditLaptops = async (productToEdit) => {
    setEditingProduct(productToEdit);
    try {
      const editData = await editDataLaptops(productToEdit.id);

      if (editData.success) {
        const updatedProducts = productCtx.phones.filter(
          (product) => product.id !== productToEdit.id
        );
        productCtx.setPhones(updatedProducts);
      } else {
        console.log("Xóa sản phẩm thành công.");
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
                <td>
                  <button
                    onClick={() => {
                      handleDeleteLaptop(product);
                    }}
                  >
                    DEL
                  </button>
                  <button
                    onClick={() => {
                      handleEditLaptops(product);
                    }}
                  >
                    EDIT
                  </button>
                </td>
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
                  <button
                    onClick={() => {
                      handleDeletePhone(product);
                    }}
                  >
                    DEL
                  </button>
                  <button
                    onClick={() => {
                      handleEditPhones(product);
                    }}
                  >
                    EDIT
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editingProduct && (
        <EditForm
          product={editingProduct}
          handleEditPhones={handleEditPhones}
        />
      )}
    </>
  );
};
export default Board;
