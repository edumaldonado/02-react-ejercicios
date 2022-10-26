import CrudApi from "./component/CrudApi";
import CrudApp from "./component/CrudApp";
import SongSearch from "./component/SongSearch";

function App() {
  return (
    <div>
      <h1>Ejercicios con React</h1>
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </div>
  );
}

export default App;
