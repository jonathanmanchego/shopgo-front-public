import { Outlet } from "react-router-dom";

function MainContent() {
  return (
    <section className="w-full flex justify-center px-32 py-16">
      <Outlet></Outlet>
    </section>
  );
}

export default MainContent;