import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { navLink } from "./components/consts";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <Routes>
        {navLink.map((nlink, i) => (
          <Fragment>
            <Route key={i} path={nlink.path} element={nlink.element} />
          </Fragment>
        ))}
      </Routes>
      <div>
        {/* <div className="w-full overflow-hidden font-myfont bg-myblack ">
          <div className={`${styles.padX}`}>
            <div className={`${styles.container}`}>
              <Home />
            </div>
          </div>
        </div> */}
      </div>
    </Router>
  );
}

export default App;
