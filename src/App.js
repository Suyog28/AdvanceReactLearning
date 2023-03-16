import './App.css';
import Item from './componants/Item';
import "./componants/Item.css";
import ItemDate from './componants/ItemDate';


function App() {
  return (
    <>
      <div className="App">
        Learn React
      </div>
      <Item name="Surfexels" />
      <Item name="Arial" />
      <Item name="Tide" />
      <ItemDate date="20-June-1020" />
      <ItemDate date="24-June-1020" />
      <ItemDate date="28-June-1020" />
    </>
  );
}

export default App;
