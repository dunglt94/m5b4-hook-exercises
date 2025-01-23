import './App.css';
import CarSelector from "./components/CarSelector";
import Timer from "./components/Timer";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";


function App() {
    return <>
        <div>
            <CarSelector/>
        </div>
        <div>
            <Timer/>
        </div>
        <div>
            <Counter1/>
        </div>
        <div>
            <Counter2/>
        </div>
    </>

}

export default App;
