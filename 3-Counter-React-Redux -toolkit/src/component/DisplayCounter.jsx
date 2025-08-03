import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((state) => state.count);
    return   <p className="lead mb-4">
           Counter Value: <span className="text-body-secondary">{counter}</span>
          </p>
}
export default DisplayCounter;