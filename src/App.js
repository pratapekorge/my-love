import logo from './logo.svg';
import './App.css';
import Login from "./Views/Login";

function App() {
  return (
    <div className={'text-c '} style={{ alignContent:'center'}} >
      <h2> Welcome To MY Love  </h2>
        <div className={'backgroung-img'} style={{ display: 'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
        <div  style={{ display:'flex', }}>

            free chat now
            {/*<img width={'40%'} height={'40%'} src={'https://i.ytimg.com/vi/rrvB0s3YpSs/maxresdefault.jpg'} />*/}

        </div>

         <div  style={{display:'flex'}}>
             <Login/>
         </div>
        </div>

    </div>
  );
}

export default App;
