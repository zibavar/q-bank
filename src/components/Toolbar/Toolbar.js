import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <div>
  <div className="container">
  <div className="row" >
   <div className="col-md-5">
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">Qbank</a></div>
       
    </nav>
    <hr/>
  </header>
 </div>
 </div>
 </div>
 </div>
);

export default toolbar;
