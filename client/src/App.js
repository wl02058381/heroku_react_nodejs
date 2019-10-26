import React from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [user,setUser] = React.useState(null)
  React.useEffect(() => {
    axios.get('/api?user=wl02058381') //輸入github用戶名
    .then(response => {
        setUser(response.data)
    });
  }, []);
  //user.user.avatar_url取得github用戶頭像
  return (
    user && (
    <div className="App">
      <header className="App-header">
        <img src={user.user.avatar_url}/>
        <p>
         {user.user.login}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ));
  }
  
export default App;
