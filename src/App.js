import CostItem from "./components/CostItem";

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
  ]

  return (
    <div>
      <h1>Начнём изучение REACT</h1>
      <CostItem date={costs[0].date}
                description={costs[0].description}
                amount={costs[0].amount}
                />
      <CostItem date={costs[1].date}
                description={costs[1].description}
                amount={costs[1].amount}
                />
      <CostItem date={costs[2].date}
                description={costs[2].description}
                amount={costs[2].amount}
                />
    </div>
  );
}

export default App;
