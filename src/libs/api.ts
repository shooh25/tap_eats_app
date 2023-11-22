import axios from "axios";

// グルメサーチAPI
const gourmetClient = axios.create({
  params: {
    key: "1e364065136da8f2",
    large_area: "Z011",
    format: "json",
  },
});

export default gourmetClient;
