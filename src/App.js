import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="https://bluejuicecomics.com/wp-content/uploads/2017/02/Amazon-icon-white.png"
          type="image/x-icon"
        />
        <title>Amazon Clone</title>
      </head>
      <body>
        <div className="app">
          <Header />
          <Home />
        </div>
      </body>
    </html>
  );
}

export default App;
