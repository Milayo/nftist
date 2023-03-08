import "./App.css";
import NFTCard from "./components/card";
import CardsSection from "./components/cards";
import FetchNfts from "./components/fetchNfts";
import HeroSection from "./components/herosection";
import Layout from "./components/layouts";

function App() {
  return (
    <div className="App">
      <Layout>
        <div>
          {/* <HeroSection/> */}
          <CardsSection />
          <FetchNfts />
        </div>
      </Layout>
    </div>
  );
}

export default App;
