import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";
import Container from "../Components/Container/Container";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-300px)]">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
