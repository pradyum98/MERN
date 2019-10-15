import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './Components/navbar'
import ExerciseList from './Components/exerciselist.js'
import EditExercise from './Components/editexercise'
import CreateExercise from './Components/createexercise'
import CreateUser from './Components/createuser'



function App() {
  return (
    <Router>
      <div className="container">
    <Navbar />
    <br />
    <Route path='/' exact  component={ExerciseList} />
    <Route path='/edit/:id'  component={EditExercise} />
    <Route path='/create'  component={CreateExercise} />
    <Route path='/user'  component={CreateUser} />
    </div>
   
    </Router>
  );
}

export default App;
