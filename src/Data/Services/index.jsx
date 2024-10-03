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

export async function deleteDataPhones(id) {
  const response = await fetch(SERVER_API + "/phones/" + id, {
    method: "DELETE",
  });

  const data = await response.json();
  return data;
}

export async function deleteDataLaptops(id) {
  const response = await fetch(SERVER_API + "/laptops/" + id, {
    method: "DELETE",
  });

  const data = await response.json();
  return data;
}

export async function editDataPhones(id, updatedData) {
  const response = await fetch(SERVER_API + "/phones/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  const data = await response.json();
  return data;
}

export async function editDataLaptops(id, updatedData) {
  const response = await fetch(SERVER_API + "/laptops/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  const data = await response.json();
  return data;
}

export async function postDataLaptops(formData) {
  const response = await fetch(SERVER_API + "/laptops/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  return data;
}
