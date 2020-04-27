import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = () => {
  
//anonymous functions 
const ProfileComponent = () => <Profile />
const DialogsComponent = () => <DialogsContainer />                       
const NewsComponent = () => <News/>
const MusicComponent = () => <Music/> 
const SettingsComponent = () => <Settings/>

  return ( 
      <div className="app-area">
        <div className="app-header">
          <Header />
        </div>

        <div className="app-content">
          <div className="app-navbar">
          <Navbar />
          </div> 

          <div className="app-section">
            <Route path='/profile' render={ProfileComponent} />
            <Route path='/dialogs' render={DialogsComponent} />
            <Route path='/news' render={NewsComponent} />
            <Route path='/music' render ={MusicComponent} />
            <Route path='/settings' render={SettingsComponent} />
          </div>
        </div>
      </div>
  );
}

export default App;
