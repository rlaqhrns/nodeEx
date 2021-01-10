// import { useState } from 'react';
import {connect} from 'react-redux';
import { incrementCountAction } from './action';
import './App.css';

function App({incrementMyCount,myCount}) {
  // const [count, setCount] = useState(5);
  // console.log(dispatch);
  return (
    <div className="App">
        <button
           onClick={incrementMyCount} >{myCount}</button>
    </div>
  );
}
const mapStateToProps = state =>({myCount:state.count});

const mapDispatchToProps = {
  incrementMyCount:incrementCountAction,
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
