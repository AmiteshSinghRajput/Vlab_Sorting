

import LandingContent from './LandingContent';
import Experiment from './Experiment';
import Footer from './Footer';
import Header from './Header';
// router 
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import ExperimentHeader from './ExperimentHeader';
import ExperimentPage from './ExperimentPage';
import Practice from './Practice';
// import Practice1 from './Practice1';

import TargetAudience from './TargetAudience';
import Simulation from './Simulation';

import Introduction from './Introduction';
import Objective from './Objective';
import Feedback from './Feedback';
import FeedbackForm from './FeedbackForm';

import References from './References';
import Theory from './InsertionSort/Theory';
import PostTest from './PostTest';
import PostTestB from './PostTest (1)';


const Landing =()=>{
    return (
        
        <Router>      
            <Routes>
            <Route path='/' element={<><Header stl="text-blue-500 underline" /><LandingContent/><Footer/></>}/>
            <Route path='/Introduction' element={<><Header in="text-blue-500 underline"/><Introduction/><Footer/></>}/>

            <Route path='/Objective' element={<><Header ob="text-blue-500 underline"/><Objective/><Footer/></>}/>
            
            <Route path='/Feedback' element={<><Header fb="text-blue-500 underline"/><Feedback/><Footer/></>}/>

            <Route path='/Feedback/FeedbackForm' element={<><Header fb="text-blue-500 underline"/><Feedback/><Footer/><FeedbackForm/></>}/>

            <Route path='/Target_Audience' element={<><Header tr="text-blue-500 underline"/><TargetAudience/><Footer/></>}/>

            <Route path='/Experiment' element={<><Header tl="text-blue-500 underline"/><Experiment/><Footer/></>}/>

            <Route path='/Experiment/InsertionSort' element={<><ExperimentPage/><Footer/></>}/> 

            <Route path='/Experiment/InsertionSort/Aim' element={<><ExperimentPage/><Footer/></>}/>

            <Route path='/Experiment/InsertionSort/References' element={<><ExperimentHeader rf="text-blue-500 underline"/><References/><Footer/></>}/>

            <Route path='/Experiment/InsertionSort/Practice' element={<><ExperimentHeader pr='text-blue-500 underline'/><Practice/><Footer/></>}/>

            <Route path='/Experiment/InsertionSort/Aim' element={<><ExperimentPage/><Footer/></>}/>
            <Route path='/Experiment/InsertionSort/References' element={<><ExperimentHeader rf="text-red-500 underline"/><References/><Footer/></>}/>
            <Route path='/Experiment/InsertionSort/Theory' element={<><Theory/></>}/>
            <Route path='/Experiment/InsertionSort/Practice' element={<><ExperimentHeader pr='text-red-500 underline'/><Practice/><Footer/></>}/>

            <Route path='/Experiment/InsertionSort/Simulation' element={<><ExperimentHeader sml="text-blue-500 underline"/><Simulation/><Footer/></>}/>

            <Route path='/Experiment/InsertionSort/Posttest' element={<><ExperimentHeader pst='text-blue-500 underline'></ExperimentHeader><PostTest ></PostTest><Footer/></>}/>
             
            </Routes>
      </Router>
    );
}

export default Landing;