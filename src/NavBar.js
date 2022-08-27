
function renderNavBar() {
  return (
    <div className = "container">
      <div className = "row">
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
          >
          Google
        </a>
        <a
          className="App-link"
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          >
          Youtube 
        </a>
        <a
          className="App-link"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          >
          Facebook
        </a>
      </div>
    </div>
  );
}

export default renderNavBar;