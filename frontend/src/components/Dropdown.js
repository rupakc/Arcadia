import React from 'react';

class Dropdown extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}
  render() {
      return (
          <div style={{width: "20rem", marginLeft: "auto", marginRight: "auto" }}>
            <div class="nes-select is-success">
              <select required id="success_select" onChange={this.props.updateParentDropdownSelection}>
                <option value="" disabled selected hidden>{this.props.dropdownLabel}</option>
                {this.props.optionsJsonList.map((optionsJson,index) =>
                    <option value={optionsJson.key} key={index}> {optionsJson.value}</option>)}
               </select>
            </div>
          </div>
      )
  }
}

export default Dropdown
