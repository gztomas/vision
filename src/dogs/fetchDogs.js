const BASE_URL = "https://dog.ceo/api";

export const fetchDogs = async (limit) => {
  const res = await fetch(`${BASE_URL}/breeds/image/random/${limit}`);
  const data = await res.json();
  return data.message;
};
