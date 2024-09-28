import logo from "../../img/cellps.jpg";

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
const HeaderAdminComponent = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <img
              src={logo}
              alt=""
              style={{ width: "230px", height: "120px" }}
            />
          </div>
          <div className="col-8">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Tìm kiếm"
                aria-label="Tìm kiếm"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                  Search
                </button>
              </div>
              <div className="user-dropdown ">
                <button
                  class="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  User
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    Setting
                  </a>
                  <a class="dropdown-item" href="#">
                    Activity Log
                  </a>

                  <div role="separator" class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderAdminComponent;
