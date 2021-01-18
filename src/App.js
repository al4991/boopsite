import Background from "./components/layout/Background"
import Center from "./components/layout/Center";
import Main from "./components/views/Main";
import './App.scss';

function App() {
  return (
    <div className="container">

      <Background>
      <Center>
        <Main/>
      </Center>
      </Background>
    
    </div>

  );
}

export default App;
