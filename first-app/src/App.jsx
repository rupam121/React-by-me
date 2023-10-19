

import "./App.css";
// import Chicken from "./Chicken";
// import Greeter from "./Greeter";
// import ListPicker from "./ListPicker";
// import Die from "./Die";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";
import Slots from "./Slots";
import ShopingList from "./ShopingList";
import PropertyList from "./PropertyList";
import ShopingListItem from "./ShopingListItem";
import Clicker from "./Clicker";
import Form from "./Form";
import Counter from "./Counter";
import Toggler from "./Toggler";
import TogglerCounter from "./ToggleCounter";
import ColorBox from "./ColorBox";
import ColorBoxGrid from "./ColorBoxGrid";

const properties = [
  { id: 101, name: "Hotel1", rating: 4.5, price: 120 },
  { id: 102, name: "Hotel2", rating: 3.5, price: 150 },
  { id: 103, name: "Hotel3", rating: 5.5, price: 120 },
  { id: 104, name: "Hotel4", rating: 6.5, price: 140 },
  { id: 105, name: "Hotel5", rating: 6.5, price: 130 },
  { id: 106, name: "Hotel6", rating: 8.5, price: 160 },
]

const data = [
  { item: 'egg', quantity: 12, completed: false },
  { item: 'milk', quantity: 1, completed: true },
  { item: 'checken', quantity: 10, completed: true },
  { item: 'app', quantity: 3, completed: false }
]

const colors = [
  "#E53935", "#E91E63", "#9C2780", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722"
];

function App() {
  return (
    <div>
      <ColorBoxGrid colors={colors} />
      {/* <TogglerCounter /> */}

      {/* <Counter /> */}

      {/* <Clicker message="HI!!" buttonText="Please Click Me" /> */}

      {/* <Form /> */}
      {/* <PropertyList properties={properties} /> */}

      {/* <ShopingList items={data} /> */}

      {/* <Heading color="magenta" text="welcome" fontSize="40px" /> 
      <Heading color="teal" text="MERN Stack" />

      <ColorList colors={["red", "pink", "purplr", "teal"]} />
      <ColorList colors={["olive", "orange", "yellow", "green"]} />

      <ListPicker value={[1, 2, 3, 4]} />

      <ListPicker value={["a", "b", "c"]} /> */}

      {/* <DoubleDice /><DoubleDice /><DoubleDice /><DoubleDice /> */}
    </div>

    // <div>
    //   <Slots val1="👻" val2="👻" val3="👻" />
    //   <Slots val1="👻" val2="👽" val3="👻" />
    // </div>
  );
}


export default App;
