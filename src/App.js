import AdminPageComponent from "./AdminPageComponent";
import ProductContextProvider from "./Data/ProductContext";
function App() {
  return (
    <>
      <ProductContextProvider>
        <AdminPageComponent></AdminPageComponent>
      </ProductContextProvider>
    </>
  );
}

export default App;
