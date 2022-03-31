import logo from './logo.svg';
import './App.css';

function login() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className = "kakaologin"> 카카오로 로그인</button>
        <button className = "naverlogin">  네이버로 로그인</button>
        <button className = "facebooklogin"> 페이스북으로 로그인</button>
      </header>
    </div>
  );
}

export default login;
