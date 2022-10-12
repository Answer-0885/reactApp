// import React from "react";
import Costs from "./components/Costs";

function App() {

  const costs = [
    {
      date: new Date(2022, 4, 1),
      description: "Холодильник",
      amount: "999.99"
    },
    {
      date: new Date(2022, 7, 5),
      description: "Notebook",
      amount: "699.99"
    },
    {
      date: new Date(2022, 9, 7),
      description: "Зимние ботинки",
      amount: "299.99"
    }
  ];
// return React.createElement(
//   "div",
//   {},
//   React.createElement("h1",{},"Начнём изучение Retertretact!"),
//   React.createElement(Costs, {costs: costs})
// );

  return (
    <div>
      <h1>Начнём изучение REACT</h1>
        <Costs costs={costs} />  
    </div>
  );
}

export default App;
