import CostItem from "./CostItem";
import "./CostList.css";

const CostsList = (props) => {

  if (props.costs.length === 0) {
    return <h2 className="cost-list__fallback">
      <p>В этом году расходов не было</p>
    </h2>
  }

  return <ul className="costs-list">
    {props.costs.map((cost) => (
      <CostItem 
        key={cost.id}
        date={cost.date}
        description={cost.description} 
        amount={cost.amount}
        />
    ))}
  </ul>
}

export default CostsList;