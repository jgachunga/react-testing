import Header from "./components/header";
import './app.scss';
import Headline from "./components/headline";


const tempArr = [{
  fName : 'Joe',
  lName : 'Rogan',
  email : 'joe#rogan.com',
  age : 24,
  onlineStatus : true,
}]
function App() {
  return (
    <div className="App">
      <Header/>
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr}/>
      </section>
    </div>  
  );
}

export default App;
