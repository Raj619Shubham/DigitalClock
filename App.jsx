import React, { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, settime] = useState(time);

  const Updatetime = () => {
    time = new Date().toLocaleTimeString();
    settime(time);
  };

  setInterval(Updatetime, 1000);
  return (
    <>
      <h1> {ctime} </h1>
    </>
  );
};

export default App;
