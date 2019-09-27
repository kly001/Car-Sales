import React from 'react';
import {connect} from "react-redux"

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {buyItem, removeFeature} from "./store/actions"



const App = (props) => {

  // const [newItems, setNewItems] = useState("")


  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature( {
      id:item.id,
      name: item.name,
      price: item.price
    })
  };

  const buyItem = item => {
    // dispatch an action here to add an item
    props.buyItem( {
      id:item.id,
      name: item.name,
      price: item.price
    })
  };



  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};



const mapStateToProps = state => {
  console.log("mapStateTpProps state:",state)
  return {
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice
  }
}


export default connect(
  mapStateToProps,
  {removeFeature, buyItem})(App)