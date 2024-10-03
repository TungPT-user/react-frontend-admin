import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { postDataLaptops } from "../../../Data/Services";

const AddProductForm = ({ setShowForm }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    img: "",
    brand: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    const isValidImageUrl = (url) => {
      return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
    };

    if (name === "img" && !isValidImageUrl(value)) {
      console.log("Vui lòng nhập một URL hình ảnh hợp lệ.");
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSubmit = async () => {
    try {
      const data = await postDataLaptops(formData);
      console.log("Product added successfully:", data);
      setShowForm(false);
      rerenderPage();
      setFormData({ 
        id: "",
        name: "",
        price: "",
        img: "",
        brand: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  const rerenderPage = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="container-form" style={{ marginLeft: "30%" }}>
        <form>
          <div class="col-sm-7">
            <input
              type="text"
              class="form-control"
              placeholder="ID"
              aria-label="City"
               name="id"
              onChange={handleChange}
            />
            <input
            type="text"
            className="form-control"
            placeholder="IMG URL"
            name="img"
            onChange={handleChange}
          />
          {formData.img && (
            <img
              src={formData.img}
              alt="Product Image"
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
          )}
            <input
              type="text"
              class="form-control"
              placeholder="Brand"
               name="brand"
              aria-label="City"
              onChange={handleChange}
            />
            <input
              type="text"
              class="form-control"
              placeholder="Name"
               name="name"
              aria-label="City"
              onChange={handleChange}
            />
            <input
              type="text"
              class="form-control"
               name="price"
              placeholder="Price"
              aria-label="City"
              onChange={handleChange}
            />
            <button
              type="button"
              class="btn btn-info"
              style={{ marginLeft: "60%" }}
              onClick={handleSubmit}
            >
              ADD PRODUCT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProductForm;
