import "./Costs.css";

import CostsList from "./CostsList";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostDiagram from "./CostsDiagram";

const Costs = (props) => {

  const [inputYear, setImputYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setImputYear(year);
  };

  const filterCosts = props.costs.filter(cost => cost.date.getFullYear().toString() === inputYear);

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={inputYear} onChangeYear={yearChangeHandler}/>

        <CostDiagram costs={filterCosts}/>

        <CostsList costs={filterCosts}/>
      </Card>
    </div>
  )
}

export default Costs;