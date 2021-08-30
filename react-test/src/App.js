import logo from './logo.svg';
import './App.css';

const Demo = (props) => {
  return (
    <div>
      <p> Learning {props.subject} Lounge, This is {props.month}</p>
    </div>
  )
}

const App = () => {
  const now = new Date();
  const lang = 'React';
  const month = 3;
  return (
    <div>
      <div className="App">
        <p>Learn React</p>
        <p>Now is {now.toString()}</p>
      </div>
      <div>
        <Demo subject={lang} month={month}></Demo>
      </div>
    </div>
  );
}


export default App;

// 
