import "./CostItem.css"
import CostDate from "./CostDate";
import Card from "../UI/Card";


const CostItem = (props) => {
    let description = props.description;
    const changeDescriptionHandler = ()=>{
        description = "New text"
        console.log(description);
    }
    return(
        <Card className="cost-item">
            <CostDate date={props.date}/>
            <div className="cost-item__descripton">
                <h2>{description}</h2>
                <div className="cost-item__price">${props.amount}</div>
            </div>
            <button onClick={changeDescriptionHandler}>Изменить описание</button>
        </Card>
    )
};
export default CostItem;