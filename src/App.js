import logo from './logo.svg';
import './App.css';

function App() {
  
  let posts = 'title';

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ {color : 'blue', fontSize: '30px'} }>開発ブログ</div>
      </div>
      <h4>{ posts }</h4>
    </div>
  );
}

export default App;
