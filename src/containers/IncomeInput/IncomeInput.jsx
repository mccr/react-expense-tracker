import { setIncomeAction } from "store/expense/expense-slice";
import s from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";

export function IncomeInput(props) {
  const dispatch = useDispatch();
  const income = useSelector((store) => store.EXPENSE.income);
  const setIncome = (e) => {
    const incomeValue = Number.parseFloat(e.target.value);
    dispatch(setIncomeAction(incomeValue));
  };
  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          defaultValue={income}
          onChange={setIncome}
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
        />
      </div>
    </div>
  );
}
