import { useEffect } from "react";
import { useState } from "react";

// custom hooks

// Là function: Nhận 2 tham số
// fn = callback function
// giaTriMacDinh: Giá trị default khi gọi api
const useFetch = (fn, giaTriMacDinh) => {
  // isLoading -> progressbar-> quay tròn
  // data -> data
  // message -> thông báo
  // error -> error

  // false chưa load xong, true là load xong
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(giaTriMacDinh);
  const [message, setMesssage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(false);
      try {
        const dataFromApi = await fn();
        setData(dataFromApi);
        setMesssage("Lấy dữ liệu thành công");
      } catch (error) {
        // Eror liên quan api, có thể do mạng, có thể do server
        setError(error);
        setMesssage("Không thấy lấy dữ liệu");
      }
      // setTimeout(()=>{
      setIsLoading(true);
      // }, 2000)
      // data
      // error => buoc viet o trong try/catch
      // message
    }

    fetchData();
  }, [fn]);
  return { isLoading, data, message, error };
};

export default useFetch;
