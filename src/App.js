import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import CustomComponent from './customComponent';

function App() {
  const arr=["Alma","Armud","Heyva","Nar"]
  return (
    <>
      {arr.map((item,index)=>(
        <Fragment key={index}>
        <h1>{item}</h1>
        </Fragment>
      ))}
      <CustomComponent/>
    </>
  );
}

export default App;
