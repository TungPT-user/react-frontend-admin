import { SERVER_API } from "../../constants/index";

async function getData(item) {
  const response = await fetch(SERVER_API + item, {
    method: "GET",
  });

  const data = await response.json();
  return data;
}

export async function getLaptops() {
  return getData("/laptops");
}

export async function getPhones() {
  return getData("/phones");
}

export async function getHeadphones() {
  return getData("/headphones");
}

export async function deleteData(id) {
  const response = await fetch(SERVER_API + { id }, {
    method: "DELETE",
  });

  const data = await response.json();
  return data;
}

export async function deletePhones(id) {
  return deleteData("/phones" + { id });
}
