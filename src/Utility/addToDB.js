export const getStoredData = () => {
  const storedSTRData = localStorage.getItem("readlist");
  if (storedSTRData) return JSON.parse(storedSTRData);
  return [];
};

export const addToStoredDB = (id) => {
  const storedData = getStoredData();
  if (storedData.includes(id)) {
    alert("Book Already Exits at Your Read List");
    return;
  } else {
    storedData.push(id);
    const convertedData = JSON.stringify(storedData);
    localStorage.setItem("readlist", convertedData);
  }
};
