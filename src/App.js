// import React from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const App = () => {

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
//   React.createElement("h1",{},"Начнём изучение React!"),
//   React.createElement(Costs, {costs: costs})
// );

  return (
    <div>
      <NewCost />
        <Costs costs={costs} />  
    </div>
  );
}

export default App;
