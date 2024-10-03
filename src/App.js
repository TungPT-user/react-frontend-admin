import AdminPageComponent from "./AdminPageComponent";
import ProductContextProvider from "./Data/ProductContext";
import EditForm from "./UI/UX/EditForm";
function App() {
  return (
    <>
      <ProductContextProvider>
        <AdminPageComponent></AdminPageComponent>
      </ProductContextProvider>
      {/* <EditForm /> */}
    </>
  );
}

export default App;
