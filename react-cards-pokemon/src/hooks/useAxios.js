import axios from "axios";
import useLocalStorage from "./useLocalStorage";

const useAxios = (keyInLS, BASE_URL) => {
  const [responses, setResponses] = useLocalStorage(keyInLS);

  const addResponseData = async (
    formatter = (data) => data,
    urlExtension = ""
  ) => {
    const response = await axios.get(`${BASE_URL}${urlExtension}`);
    setResponses((data) => [...data, formatter(response.data)]);
  };

  const clearResponseData = () => setResponses([]);

  return [responses, addResponseData, clearResponseData];
};

export default useAxios;
