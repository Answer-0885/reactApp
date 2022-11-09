import "./CostList.css"
import CostItem from "./CostItem"

const CostList = (props) => {

    if(props.costs.length === 0){
        return <h2 className="cost-list__fallback">В этом году расходов нет</h2>
    }

    return <ul className="cost-list">
        {props.costs.length >  0 && props.costs.map(cost => (
            <CostItem
            key={cost.id} // делает уникальным каждый элемент CostItem, что помогает определять Реакту. Нужно всегда добавлят когда есть какой-то список.
            date={cost.date}
                description={cost.description}
                amount={cost.amount}/>))}
    </ul>
}
export default CostList;