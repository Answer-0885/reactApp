import "./CostItem.css"

function CostItem() {
    return(
        <div className="cost-item">
            <div>05.10.2022</div>
            <div className="cost-item__descripton">
                <h2>Холодильник</h2>
                <div className="cost-item__price">$9999</div>
            </div>
        </div>
    )
};
export default CostItem;