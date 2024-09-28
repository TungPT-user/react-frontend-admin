import MenuComponent from "./MenuComponent";
import HeaderAdminComponent from "./HeaderAdminPageComponent";
import Board from "../Board";
import "bootstrap/dist/css/bootstrap.css";
const AdminPageComponent = () => {
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
      </div>
    </>
  );
};

export default AdminPageComponent;
