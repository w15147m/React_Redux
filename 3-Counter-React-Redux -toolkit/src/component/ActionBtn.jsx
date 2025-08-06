import { useDispatch } from "react-redux";
// Make sure this path is correct for your project structure
import { decrement, increment } from "../store/indexStore";

const ActionBtn = () => {
  // 1. Get the dispatch function from the hook
  const dispatch = useDispatch();

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        onClick={() => dispatch(increment())}
        className="btn btn-primary btn-lg gap-3"
      >
        <i className="bi bi-plus-lg"></i>
      </button>

      <button
        type="button"
        onClick={() => dispatch(decrement())}
        className="btn btn-secondary btn-lg "
      >
        <i className="bi bi-dash"></i>
      </button>
    </div>
  );
};

export default ActionBtn;