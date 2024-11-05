import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Layout = () => {
  return (
    <div>
      <Header />
      <main style={{ flex: "1", minHeight: "calc(100vh - 60px)" }}>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
