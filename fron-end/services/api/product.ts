import axios from "axios";

export  const getProductList = async () => {
  const res = await axios.get("https://api.apptruyen.lol/api/book");
  return res.data
};

