import { useDispatch } from "react-redux";

const ActionBtn = () => {
            const dispatch =    useDispatch();
  return (

    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" onClick={()=> {dispatch({type: 'increment'})}} className="btn btn-primary btn-lg gap-3">
        <i className="bi bi-plus-lg"></i>
      </button>

      <button type="button" onClick={()=> {dispatch({type: 'decrement'})}} className="btn btn-secondary btn-lg ">
        <i className="bi bi-dash"></i>
      </button>
    </div>
  );
};
export default ActionBtn;
