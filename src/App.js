import "./App.css";

function App() {
  // const handleChange = (e) => {
  //   getSearch(e.target.value);
  // };

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a Currency</h1>
        <form>
          <input
            className="coin-input"
            type="text"
            // onChange={handleChange}
            placeholder="Search"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
