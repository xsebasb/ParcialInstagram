import React, { useState} from 'react';
import Home from './components/Home';
import Logueo from './components/Logueo';
import firebaseApp from './credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(firebaseApp);

function App() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);
  onAuthStateChanged(auth,(usuarioFirebase) => {
    if(usuarioFirebase){
      //Codigo en que haya sesion iniciada
      setUsuarioGlobal(usuarioFirebase);
    }else{
      //Codigo en que no haya sesion iniciada
      setUsuarioGlobal(null);
      
    }
  })
  return (
    < >{usuarioGlobal ? < Home/>: <Logueo/> }</> 
  )};

export default App;
