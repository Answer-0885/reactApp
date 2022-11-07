import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";
import React,{useState} from "react";

const INITIAL_COSTS = [
  {
    id:'c1',
    date: new Date(2022, 4, 1),
    description: "Холодильник",
    amount: "999.99"
  },
  {
    id:'c2',
    date: new Date(2022, 7, 5),
    description: "Notebook",
    amount: "699.99"
  },
  {
    id:'c3',
    date: new Date(2022, 9, 7),
    description: "Зимние ботинки",
    amount: "299.99"
  }
];

const App = () => {

 const[costs, setCosts] = useState(INITIAL_COSTS)
// return React.createElement(
//   "div",
//   {},
//   React.createElement("h1",{},"Начнём изучение React!"),
//   React.createElement(Costs, {costs: costs})
// );

  const addCostHandler = (cost) =>{
    setCosts(prevCosts =>{
      return [cost, ...prevCosts]
    });
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
        <Costs costs={costs} />  
    </div>
  );
}

export default App;
