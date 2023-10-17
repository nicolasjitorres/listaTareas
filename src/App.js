import './App.css';
import Logo from './componentes/Logo'
import ListaTareas from './componentes/ListaTareas';

function App() {
  return (
    <div className="App">
      <Logo/>

      <div className='lista-tareas-principal'>
       
        <h1>Mis tareas</h1>
        <ListaTareas />
      </div>

    </div>
  );
}

export default App;
