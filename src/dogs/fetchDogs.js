export const fetchDogs = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random/4");
  const data = await res.json();
  return data.message;
};
