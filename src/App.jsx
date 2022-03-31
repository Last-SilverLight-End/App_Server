import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          FAC에 오신걸 환영합니다!
        </p>
        <a className="App-link" >
          로그인 연동
        </a>
        <button
          className = "kakaologin"
          onClick={kakaoLoginClickHandler}> 
            Kakao 로그인
            </button>
        <button 
          className = "instagramlogin"
          onClick={instagramLoginClickHandler}>
           Instagram 로그인
           </button>
        <button 
          className = "facebooklogin"
          onClick={facebookLoginClickHandler}>
            Facebook 로그인
            </button>
      </header>
    </div>
  );
}

export default App;
