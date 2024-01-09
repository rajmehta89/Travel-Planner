// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  
  const [count,setCount]=useState(0);

  const products=[
     {
       name: 'raj',
       id : '21ituos032'
     },
     
     {
      name: 'jash',
      id : '21ituos033'
    },

    {
      name: 'nirj',
      id : '21ituos031'
    },

  ];

  let  pro=products.map(products=>
    <li key={products.id} style={{
      color : products.name==='raj' ? 'red' : 'yellow' 
    }}>
        {products.name}
    </li>

  );

  const clicked=()=>{
    setCount(count+1);

    if(count===15)
    {
        pro=products.map(products=>
        <li key={products.id} style={{
          color:products.name==='raj' ? 'yellow' : 'red'
        }}>
        
        {products.name}

        </li>
        );
    }

  };

  
return (
  <>
   <ul>{pro}</ul>
   <button onClick={clicked}>you are clicking  me {count} times</button>
</>


  );
}

export default App;
