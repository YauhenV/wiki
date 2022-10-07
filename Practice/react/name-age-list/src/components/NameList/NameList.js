import NameItem from "./NameItem";
import "./NameList.css";

const NameList = (props) => {
  return (
    <ul>
      {props.dataList.map((item) => (
        <NameItem key={item.id}>
          {item.name + " - " + item.age}
        </NameItem>
      ))}
    </ul>
  );
} 

export default NameList;