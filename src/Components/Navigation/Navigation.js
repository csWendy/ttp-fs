import React, { Component } from 'react';

import Navbar from './Navbar';
// import SideDrawer from './SideDrawer';
// import Backdrop from './backdrop/Backdrop';

// import '../../Index.css';

class Navigation extends Component{
    state ={
        SideDrawerOpen: false
    }
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { SideDrawerOpen : !prevState.SideDrawerOpen }
        });
    };
    backdropClickHandler =() => {
        this.setState({ SideDrawerOpen: false});
    };

    render(){
        let backdrop;

        if(this.state.sideDrawerOpen){
            backdrop = <Backdrop click = {this.BackdropClickHandler}/>;
        }
        return(
            <div style = {{height: '100%'}}>
                <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show = {this.state.sideDrawerOpen}/>
                {backdrop}
            </div>
        );
    }
}

export default Navigation;