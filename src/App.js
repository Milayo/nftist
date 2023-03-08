import "./App.css";
import FetchNfts from "./components/fetchNfts";
import Layout from "./components/layouts";

function App() {
  return (
    <div className="App">
      <Layout>
        <div>
          <FetchNfts />
        </div>
      </Layout>
    </div>
  );
}

export default App;
