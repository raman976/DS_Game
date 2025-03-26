import "./App.css";
import { StyledFooter } from "./assets/components/Centerpage/Footer.Styled";
import Mainpage from "./assets/components/Centerpage/Mainpage";
import { Wrapper } from "./assets/components/Styledpage";

function App() {
  return (
    <>
      <Wrapper>
        <Mainpage />
        <StyledFooter />
      </Wrapper>
      
    </>
  );
}

export default App;
