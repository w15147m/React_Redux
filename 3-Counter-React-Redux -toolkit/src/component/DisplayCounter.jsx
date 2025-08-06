import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const {counterVal} = useSelector((state) => state.counter);
    return   <p className="lead mb-4">
           Counter Value: <span className="text-body-secondary">{counterVal}</span>
          </p>
}
export default DisplayCounter;