import React, { Component } from 'react';

import Categories from '../Categories/Categories';

import "../Landing/Landing.css";

class Landing extends Component{
    constructor (props){
        super(props); //super refers to the parent class constructor. need it before use "this"
        this.CategorySection = React.createRef();

        this.state ={
            category:""
        }
    }

    /* handle categories change*/
    categoryChange = (value) => {
        this.setState({
            category:value
        },() => {
            console.log('The category is', this.state.category)
            this.props.history.push({
                pathname:'/Register',
                state:{category:this.state.category}
            });
        })
    } 

    handleClick = () => {
        this.CategorySection.current.scrollIntoView({ behavior:'smooth'})
    }

    render(){
        return(
            <div>
                <div className="landingCover">
                    <button onClick={this.handleClick}> Welcome to Treasure Island </button>
                </div>

                <div className="categoriesLanding" ref={this.CategorySection}>
                    <h3> Try a new stock today!</h3>
                    <hr />
                    <Categories categoryChange={this.categoryChange}/>
                </div>
            </div>
        );
    }
}
export default Landing;