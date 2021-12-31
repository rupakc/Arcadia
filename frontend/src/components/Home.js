import React from 'react';
import Button from './Button.js';
import Dropdown from './Dropdown.js';
import Searchbar from './Searchbar.js';
import axios from 'axios';
import Table from './Table.js';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import  API_CONFIG from '../config/constants.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchbarPlaceHolderValue: "Search for a Given Term",
      dropdownLabelValue: "Please Select an item",
      buttonLabelValue: "Search Ahead",
      optionsJsonListValue: [{'key':'breakingbadquote','value':'Breaking Bad Quotes'},
                              {'key':'breakingbadcharacter','value':'Breaking Bad Characters'},
                              {'key':'finalspace', 'value':'Final Space Characters'}],
      dropdownValueSelected: 'breakingbadquote',
      searchBarValue: 'sample search',
      showResults: false,
      showLoader: false,
      tableDataJson: {'headerList':[],'dataList':[]}
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.updateStateDropdownSelect = this.updateStateDropdownSelect.bind(this);
    this.updateStateSearchBar = this.updateStateSearchBar.bind(this);
  }

  clickHandler() {
    console.log("Button Clicked Finally !!!");
    var selectedEndpoint = this.state.dropdownValueSelected;
    var API_URI = API_CONFIG[selectedEndpoint];
    this.setState({showLoader: true});
    axios.get(API_URI,{params:{q:this.state.searchBarValue}}).
      then((response) => {
        console.log(response.data);
        this.setState({tableDataJson: response.data});
        this.setState({showResults: true});
        this.setState({showLoader: false});
        this.forceUpdate();
      });
  }

  updateStateDropdownSelect(e) {
    this.setState({dropdownValueSelected:e.target.value});
    this.forceUpdate();
    console.log(e.target.value);
  }

  updateStateSearchBar(e) {
    console.log(e.target.value);
    this.setState({searchBarValue: e.target.value})
  }

  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
          <Searchbar placeholder={this.state.searchbarPlaceHolderValue} updateParentSearchBar={this.updateStateSearchBar}/>
          <br/>
          <Dropdown dropdownLabel={this.state.dropdownLabelValue} updateParentDropdownSelection={this.updateStateDropdownSelect} optionsJsonList={this.state.optionsJsonListValue}/>
          <br/>
          <div style={{ width: "10rem", marginLeft: "auto", marginRight: "auto" }}>
            <Button buttonLabel={this.state.buttonLabelValue} parentClickHandler={this.clickHandler}/>
          </div>
          <br/>
          <div>
            { this.state.showResults ? <Table tableDataJson={this.state.tableDataJson}/> : null }
          </div>
          <div style={{display:"flex", justifyContent:"center"}}>
            { this.state.showLoader ? <Loader type="Grid" color="#00BFFF" height={100} width={100} timeout={3000}/> : null }
          </div>
      </div>
    );
  }
}

export default Home;
