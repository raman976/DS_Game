import "./App.css";
import Footer from "./assets/components/Centerpage/Footer";
import Header from "./assets/components/Centerpage/Header";
import Mainpage from "./assets/components/Centerpage/Mainpage";
import { Wrapper } from "./assets/components/Styledpage";

function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <Mainpage />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
