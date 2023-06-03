import Header from "./components/Header";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);

  const PreLoader = () => {
    return <div className="preloader" />;
  };
  setTimeout(() => {
    setLoading(true);
  }, 3000);

  return (
    <div className="w-full">
      {
        !loading ? (
          <PreLoader />
          ) : (
          <Header />
         )
      }
      
    </div>
  );
};

export default App;
