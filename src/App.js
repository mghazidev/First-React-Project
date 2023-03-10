import './App.css';
import Name from './Name.js';
import Table from './Table.js'
import List from './List';
import Products from './Products.js';
import brushImage from './images/brush.jpg';
import soapImage from './images/soap.jpg';
import shampooImage from './images/shampoo.jpg';


function App() {
  const page = [{
    name:'Soap',
    price: 100,
    image: soapImage
  },
  {
    name:'Toothbrush',
    price: 200,
    image: brushImage
  },
  {
    name:'Shampooo',
    price: 300,
    image: shampooImage
  }
];

  const list = ['Car','Bike', 'house']

  const obj = [{
    fname: 'ghazi',
    lname: 'zaidi'
  },
  {
    age: 18,
    height: 6
}];

  return (
    
    <div className='App'>
      
      <Name>
        <h1>Hello my name is ghazi</h1>
      </Name>
      <Table props={obj} />
      <List category = {list} />

      <Products arr = {page} />
    </div>
  )
}

export default App;
