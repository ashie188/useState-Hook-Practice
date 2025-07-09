import React, { useState } from "react";

function App() {
  setInterval(my_time, 1000);

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function my_time() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={my_time}>Get Time</button>
    </div>
  );
}

export default App;
