import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nave from "./component/Nave";
import DisplayCounter from "./component/DisplayCounter";
import ActionBtn from "./component/ActionBtn";
import { Provider } from "react-redux"; // ✅ Fix import
import counterStore from "./store/indexStore"; // ✅ Make sure this exists
import Input from "./component/Input";

function App() {
  const [count, setCount] = useState(0);
  return (
    <Provider store={counterStore}> {/* ✅ Capital P */}
      <main className="p-5">
        <div className="px-4 py-5 my-5 text-center">
          <Nave />
          <div className="col-lg-6 mx-auto">
            <DisplayCounter />
            <ActionBtn />
            <Input/>
          </div>
        </div>
      </main>
    </Provider>
  );
}

export default App;
