import React from 'react';

const Bemvindo = (props)=> {
return (
  <div>
    <h2>Bem-vindo(a){props.nome}</h2>
<h3>Tenho {props.idade} anos</h3>
  </div>
)}

function App() {
  return (
    <div>
      Olá mundo!
      <Bemvindo nome="Lucas" idade="25" />
      <Bemvindo nome="João" idade  = "22"/>
      <h1>Curso React</h1>

    </div>
  )

}

export default App;