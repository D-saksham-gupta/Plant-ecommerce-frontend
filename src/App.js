import "./App.css";
import Container from "./Components/Container";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Search />
      <Body />
      <Container />
      <Footer />
    </>
  );
}

export default App;
