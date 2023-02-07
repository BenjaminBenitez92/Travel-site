import React from "react";
import Button from "./Button";
const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button primary rounded>
        A big Button
      </Button>
    </div>
  );
};

export default App;
