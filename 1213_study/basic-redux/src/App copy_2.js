// import { useState } from 'react';
import {connect} from 'react-redux';
import './App.css';

function App({dispatch,myCount}) {
  // const [count, setCount] = useState(5);
  // console.log(dispatch);
  return (
    <div className="App">
        <button onClick={()=>null} >{myCount}</button>
    </div>
  );
}
const mapStateToProps = state =>({myCount:state.count});

export default connect(mapStateToProps)(App);
