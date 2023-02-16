import './App.css';
import Header from './components/Header';
import { styles } from './components/style';

function App() {
  return (
    <div>
      <div className="w-full overflow-hidden font-myfont bg-myblack ">
        <div className={`${styles.padX}`}>
          <div className={`${styles.container}`}>
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
