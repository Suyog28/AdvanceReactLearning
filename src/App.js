import './App.css';
import Item from './componants/Item';
import "./componants/Item.css";
import ItemDate from './componants/ItemDate';
import MyButton from './componants/MyButton';


function App() {

  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  return (
    <>
      <div className="App">
        Learn React
      </div>
      <h1>{user.name}</h1>
      <img src={user.imageUrl}
        alt={user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }} />
      <MyButton />
      <Item name="Surf Excels " />
      <Item name="Arial" />
      <Item name="Tide" />
      <ItemDate date="20-June-1020" />
      <ItemDate date="24-June-1020" />
      <ItemDate date="28-June-1020" />
    </>
  );
}

export default App;
