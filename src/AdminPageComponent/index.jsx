import MenuComponent from "./MenuComponent";
import HeaderAdminComponent from "./HeaderAdminPageComponent";
import { useState } from "react";
import Board from "../Board";
// import { Chart } from "chart.js";
import AddProductForm from "../UI/UX/PostForm";
import "bootstrap/dist/css/bootstrap.css";
const AdminPageComponent = () => {
  const [showForm, setShowForm] = useState(false);

  const handleCreateClick = () => {
    setShowForm(true);
  };
  return (
    <>
      <div className="container-fluid">
        <HeaderAdminComponent></HeaderAdminComponent>;
      </div>
      <div className="row">
        <div className="col-4">
          <MenuComponent></MenuComponent>;
        </div>
        <div
          className="col-8 "
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Board></Board>
        </div>
        <div>
          {showForm ? (
            <AddProductForm setShowForm={setShowForm} />
          ) : (
            <button onClick={handleCreateClick}>ADD PRODUCT</button>
          )}
        </div>
        <div>{/* <Chart /> */}</div>
      </div>
    </>
  );
};

export default AdminPageComponent;
