import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { useEffect, useState } from "react";

function App() {
  // const [theme, setTheme] = useState("light");
  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };
  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);

  return (
    // <div className={`App ${theme}`}>
    <div>
      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
