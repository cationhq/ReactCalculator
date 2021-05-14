import './App.css';

function App() {
  return (
    <div className="container">
      <div className="navigation">
        <ul>
          <li>
            <a href="#">
              <span className="icon"><i className="fa fa-home" aria-hidden="true"/></span>
              <span className="tittle">
                Home
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"><i className="fa fa-user-o" aria-hidden="true"/></span>
              <span className="tittle">
                Profile
              </span>
            </a>
          </li><li>
            <a href="#">
              <span className="icon"><i className="fa fa-commenting-o" aria-hidden="true"/></span>
              <span className="tittle">
                Message
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"><i className="fa fa-question-circle" aria-hidden="true"/></span>
              <span className="tittle">
                Help
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"><i className="fa fa-cog" aria-hidden="true"/></span>
              <span className="tittle">
                Settings
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"><i className="fa fa-sign-out" aria-hidden="true"/></span>
              <span className="tittle">
                Sing out
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="toggle"/>
    </div>
  );
}

export default App;
