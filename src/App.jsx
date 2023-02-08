/* eslint-disable react/react-in-jsx-scope */
import { useFetchHotelsQuery } from "./store";

const App = () => {
  const { data, error } = useFetchHotelsQuery();
  console.log(data, error);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default App;
