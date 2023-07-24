import './App.css';
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/hello-world";
import Tuiter from "./tuiter";
import {HashRouter} from "react-router-dom";
import {Routes, Route} from "react-router";




function App() {
   return (
    <HashRouter>
      <div className="container">
      <Routes>
          {/* <Route path="/"         element={<Navigate to="/labs"/>}/> */}
          <Route path="/labs/*"   element={<Labs/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/tuiter/*" element={<Tuiter/>}/>
        </Routes>
      </div>
    </HashRouter>
   );
}
export default App;


