import "./CostsFilter.css";

const CostsFilter = (props) => {

  const yearChangeHandle = (event) => {
    const inputFilterYear = event.target.value;

    props.onChangeYear(inputFilterYear);
    }
  

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Выбор По Году</label>
        <select value={props.year} onChange={yearChangeHandle}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
