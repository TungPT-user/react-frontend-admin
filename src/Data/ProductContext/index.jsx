import { createContext, useEffect, useState } from "react";
import useFetch from "../Hook-data/index";
import { getPhones, getLaptops, getHeadphones } from "../Services";
import Loading from "../../UI/UX/Loading";
// Context
export const ProductContext = createContext();

// Provider
export default function ProductContextProvider({ children }) {
  const [laptops, setLaptops] = useState([]); // laptop
  const [phones, setPhones] = useState([]); // phone
  const [headPhones, setHeadPhones] = useState([]); // phone

  // Thêm sửa xóa
  // Nên extend thằng useState -> useReducer
  // bản chất: chỉ gọi 1 api để fetch data -> lấy về cho products
  const { isLoading: phonesLoading, data: phonesData } = useFetch(
    getPhones,
    []
  );
  const { isLoading: laptopsLoading, data: laptopsData } = useFetch(
    getLaptops,
    []
  );
  const { isLoading: headPhonesLoading, data: headPhonesData } = useFetch(
    getHeadphones,
    []
  );

  useEffect(() => {
    // laptopsData.size > 0
    setPhones([...phonesData]);
    setLaptops([...laptopsData]);
    setHeadPhones([...headPhonesData]);
  }, [phonesData, laptopsData, headPhonesData]);

  const value = {
    laptops: laptops,
    phones: phones,
    headPhones: headPhones,
  };

  // List products
  // Lấy thông qua api

  // products: mảng product

  // Truyền global state vào
  return (
    <ProductContext.Provider value={value}>
      {!laptopsLoading && <div>{<Loading />}</div>}
      {children}
    </ProductContext.Provider>
  );
}
