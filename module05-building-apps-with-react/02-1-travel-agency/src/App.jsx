import { Footer, NavBar } from "./components/index.js";
import { Home } from "./pages/index.js";

const App = () => {
  // TODO: React Router routes and layout
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="container mx-auto px-4 py-4 mb-auto">
        <Home />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
