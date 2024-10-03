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
    descripstion: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    try {
      const data = await postDataLaptops(formData);
      console.log("Product added successfully:", data);
      setShowForm(false);
      rerenderPage();
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
              onChange={handleChange}
            />
            <input
              type="text"
              class="form-control"
              placeholder="IMG"
              aria-label="City"
              onChange={handleChange}
            />
            <input
              type="text"
              class="form-control"
              placeholder="Brand"
              aria-label="City"
              onChange={handleChange}
            />
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              aria-label="City"
              onChange={handleChange}
            />
            <input
              type="text"
              class="form-control"
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
