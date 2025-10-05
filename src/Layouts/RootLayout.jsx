import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";
import Container from "../Components/Container/Container";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default RootLayout;
