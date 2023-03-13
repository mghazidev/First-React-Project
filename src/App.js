import './App.css';
// import Name from './Name.js';
// import Table from './Table.js'
// import List from './List';
// import Products from './Products.js';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Staff from './Components/Staff';
import Calender from './Components/Calender';
import Teach from './Components/Teach';
import Course from './Components/Course';
import Db from './Components/Db';
import Schedule from './Components/Schedule';

function App() {
  //   const page = [{
  //     name:'Soap',
  //     price: 100,
  //     image: './soap.jpg'
  //   },
  //   {
  //     name:'Toothbrush',
  //     price: 200,
  //     image: './brush.jpg'
  //   },
  //   {
  //     name:'Shampooo',
  //     price: 300,
  //     image: './shampoo.jpg'
  //   }
  // ];

  //   const list = ['Car','Bike', 'house']

  //   const obj = [{
  //     fname: 'ghazi',
  //     lname: 'zaidi'
  //   },
  //   {
  //     age: 18,
  //     height: 6
  // }];

  return (
    <>
      <div className='main-component'>
        <div className='App'>
          <Sidebar />
        </div>
        <div className='App2'>
          <Navbar />
          <div className='section'>
            <div className='Staff-section'>
              <Staff />
            </div>
            <div className='Calender-section'>
              <Calender />
            </div>
          </div>
          <div className='section'>
            <div className='Teach-section'>
              <Teach />
            </div>
            <div className='Course-section'>
              <Course />
            </div>
          </div>
          <div className='section'>
            <div className='Teach-section'>
              <Db />
            </div>
            <div className='Course-section'>
              <Schedule />
            </div>
          </div>
        </div>
      </div>
    </>



    /* <Name>
      <h1>Hello my name is ghazi</h1>
    </Name>
    <Table props={obj} />
    <List category = {list} />
   
    <Products arr = {page} /> */

  )
}

export default App;
