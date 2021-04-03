import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";

function App() {
  return (
    // <div className="App">
      <header className="App-header">
        <Navigation />
        <MainContent />
      
    </header>
    // </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <DrawArea />
//     </div>
//   );
// }

export default App;
