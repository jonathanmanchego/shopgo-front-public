import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function Layout() {
  return (
    <div className="min-h-dvh bg-gray-100 ">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Layout;