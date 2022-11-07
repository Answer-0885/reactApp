import "./Costs.css"
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react"

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020');

    const yearChangeHandler = (year)=> {
        setSelectedYear(year);
    };

    return(
    <div>     
        <Card className="costs">
        < CostsFilter year={selectedYear}
        onChangeYear={yearChangeHandler}/>
        {props.costs.map(cost => (
        <CostItem
        key={cost.id} // делает уникальным каждый элемент CostItem, что помогает определять Реакту. Нужно всегда добавлят когда есть какой-то список.
        date={cost.date}
            description={cost.description}
            amount={cost.amount}/>))}
        </Card>
    </div>
    )
};
export default Costs;