
import {useSelector, useDispatch} from "react-redux"


function App() {
  const {test} = useSelector(state => state.app)
  console.log(test)
  return (
    <div className="">
        <h1 className="">
          hihi
        </h1>
    </div>
  );
}

export default App;
