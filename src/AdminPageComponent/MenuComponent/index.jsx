import "./style.css";

const MenuComponent = () => {
  return (
    <>
      <div className="nav-menu">
        <div
          className="d-flex flex-column flex-shrink-0 p-3 bg-light"
          style={{ width: "230px" }}
        >
          <ul class="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark">
                Page
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-back">
                Charts
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-back">
                Table
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuComponent;
