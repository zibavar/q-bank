import React from 'react';
import './SideDrawer.css';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
// import { faGhost  } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spinner    } from '@fortawesome/free-solid-svg-icons';
// import red from '@material-ui/core/colors/red';
// import blue from '@material-ui/core/colors/blue';
import SvgIcon from '@material-ui/core/SvgIcon';
import MaterialIcon from 'material-icons-react';
const styles = theme => ({
 
  icon: {
    margin: theme.spacing.unit * 2,
  },
  
 
});

// import img from '../../images/images.jpg';
const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  const { classes } = props;
  return (
    <nav className={drawerClasses}>
     

   
  <ul>

  <img  className="responsive" src={require('./images/steven-r-flanagan-square.jpg')}  /> 
  <li>
  <MaterialIcon icon="home" /><Link to="/home" > صفحه اصلی  </Link>
  </li>
  <li>
  <MaterialIcon icon="check_circle"/> <Link to="/exam"  style={{paddingLeft: 56, marginTop:30}}> آزمون</Link>
  </li>
  <li>
  <MaterialIcon icon="event_note"/>  <Link to="/consequence"  style={{paddingLeft: 24}}> دیدن نتایج </Link>
  </li>
  <li>
  <MaterialIcon icon="settings" /> <Link to="/setting"  style={{paddingLeft: 35}}> تنظیمات </Link>
  </li>
  
  </ul>
 
    
  
    </nav>
  );
};

export default  withStyles(styles)(SideDrawer);


