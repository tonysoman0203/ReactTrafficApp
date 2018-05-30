//@flow
import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import {getDataByRegion } from './actions'
import logo from './logo.svg';
import './App.css';
import { Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button } from 'reactstrap';


const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch, callService: (reg)=>dispatch(getDataByRegion(reg)) };
}

type Props = {
  callService: (reg: string)=>{}
}

type State = {
  data: [], 
}

class App extends Component<Props, State> {
  
  test : string;
  
  constructor(){
    super()
    this.state = {
      data :  [],
    }

    this.test = `123`;
  }

  componentDidMount(){
    this.props.callService("Hong Kong Island")
  }

  componentWillReceiveProps(nextProps){
    if(nextProps != this.props){
      this.setState({data: nextProps.state.DataReducers.items})
    }
  }

  renderListView() {
    if(this.props.state.UIReducers.get('isLoading')){
      return (<div className="loader"></div>)
    }else{
      return ( <ul> {this.renderItem()} </ul>)
    }
  }

  renderItem(){
    var items = this.state.data;
    console.log(`renderItem ${JSON.stringify(items)} `);
    var cards = []
    for (const i in items) {
      console.log(`item = ${JSON.stringify(i)}`);
      var obj = items[i];
      var image = JSON.parse(JSON.stringify(obj.image))
      var card = (
        <Card key={obj.key}>
          <CardImg top width="100%" src={image.url} alt="Card image cap" />
          <CardBody>
            <CardTitle>{image.region}</CardTitle>
            <CardSubtitle>{image.description}</CardSubtitle>
            <CardText>updated at : {obj.updatedAt.toString()}</CardText>
            <Button onClick={()=>{ this.props.callService("Hong Kong Island") }}>
            Click
            </Button>
          </CardBody>
        </Card>
      );
      cards.push(card)
    }

    return (
      cards
    ) 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.renderListView()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

