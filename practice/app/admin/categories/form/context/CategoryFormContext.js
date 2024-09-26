import { createContext, useContext } from "react";

const CategoryFormContext = createContext();

export default function CategoryFormContextProvider({ children }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDone, setIsDone] = useState(false);

  const handleData = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };
  // ===
  const handleCreate = async () => {
    setError(null);
    setIsLoading(true);
    setIsDone(false);
    try {
      // Add data to firebase firestore
      // image ko storage me behi dalna hai
      setIsDone(true);
    } catch (error) {
      setError(error?.message);
    }
    setIsLoading(false);
  };

  return (
    <CategoryFormContext.Provider
      value={{
        data,
        isLoading,
        error,
        isDone,
        handleData,
        handleCreate,
      }}
    ></CategoryFormContext.Provider>
  );
}

export const useCategoryForm = () => useContext(CategoryFormContext);
