import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./view/home/home";
import Support from "./view/support/support";

import Navi from "./components/nav/nav";

const Section = styled.div`
  width: 100%;
  display: flex;
`;
const Layout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

function App() {
  return (
    <Layout>
      <Navi />
      <Section>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="support" element={<Support />}></Route>
        </Routes>
      </Section>
    </Layout>
  );
}

export default App;
