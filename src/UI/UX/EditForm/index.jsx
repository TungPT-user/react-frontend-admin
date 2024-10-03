import { useState } from "react";
import { editDataPhones, editDataLaptops } from "../../../Data/Services";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

const EditForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    brand: "",
    name: "",
    price: "",
  });
  const handleChangeData = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    console.log("check", name, value);
  };
  const rerenderPage = () => {
    window.location.reload();
  };
  const handleSubmitPhone = async () => {
    try {
      const response = await editDataPhones(formData.id, formData);

      // Xử lý response nếu cần
      console.log("Dữ liệu đã được cập nhật thành công:", response);

      // Đặt logic xử lý sau khi cập nhật dữ liệu thành công ở đây

      rerenderPage();
    } catch (error) {
      console.error("Đã xảy ra lỗi khi cập nhật dữ liệu:", error);
    }
  };

  const handleSubmitLaptop = async () => {
    try {
      const response = await editDataLaptops(formData.id, formData);

      // Xử lý response nếu cần
      console.log("Dữ liệu đã được cập nhật thành công:", response);

      // Đặt logic xử lý sau khi cập nhật dữ liệu thành công ở đây

      rerenderPage();
    } catch (error) {
      console.error("Đã xảy ra lỗi khi cập nhật dữ liệu:", error);
    }
  };

  return (
    <>
      <div className="container-form">
        <div class="col-sm-7">
          <input
            type="text"
            class="form-control"
            placeholder="ID"
            value={formData.id}
            aria-label="City"
            onChange={handleChangeData}
            name="id"
          />
          <input
            type="text"
            class="form-control"
            placeholder="Brand"
            value={formData.brand}
            onChange={handleChangeData}
            aria-label="City"
            name="brand"
          />
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            value={formData.name}
            aria-label="City"
            onChange={handleChangeData}
            name="name"
          />
          <input
            type="text"
            class="form-control"
            placeholder="Price"
            value={formData.price}
            aria-label="City"
            onChange={handleChangeData}
            name="price"
          />
          <button
            type="button"
            class="btn btn-info"
            style={{ marginLeft: "70%" }}
            onClick={handleSubmitPhone}
          >
            submitPhone
          </button>
          <button
            type="button"
            class="btn btn-info"
            style={{ marginLeft: "70%" }}
            onClick={handleSubmitLaptop}
          >
            submitLaptop
          </button>
        </div>
      </div>
    </>
  );
};

export default EditForm;
