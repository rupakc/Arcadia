import React from 'react';
import Button from './Button.js';
import Dropdown from './Dropdown.js';
import Searchbar from './Searchbar.js';
import Table from './Table.js';
import API_CONFIG from '../config/constants.js';
import axios from 'axios';
import Loader from 'react-loader-spinner';

class Comics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchbarPlaceHolderValue: "Search for a Given Term",
      dropdownLabelValue: "Please Select an item",
      buttonLabelValue: "Search Ahead",
      optionsJsonListValue: [{'key':'people','value':'Star Wars People API'},
                              {'key':'starships','value':'Star Wars Starships API'},
                              {'key':'planets', 'value':'Star Wars Planets API'}],
      dropdownValueSelected: 'house',
      searchBarValue: 'mario',
      showResults: false,
      showLoader: false,
      tableDataJson: {'headerList':[],'dataList':[]}
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.updateStateDropdownSelect = this.updateStateDropdownSelect.bind(this);
    this.updateStateSearchBar = this.updateStateSearchBar.bind(this);
  }

  clickHandler() {
    console.log("Button Clicked Finally in comics !!!");
    var selectedKey = this.state.dropdownValueSelected;
    var searchParam = selectedKey;
    var API_URI = API_CONFIG["STAR_WARS_URL"];
    this.setState({showLoader:true});
    axios.get(API_URI,{params:{q:searchParam}}).
      then((response) => {
        console.log(response.data);
        this.setState({tableDataJson: response.data});
        this.setState({showResults: true});
        this.setState({showLoader:false});
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

export default Comics;
