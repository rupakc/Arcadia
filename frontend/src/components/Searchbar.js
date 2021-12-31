import React from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
          <div>
            <div class="nes-field" style={{width: "40rem", marginLeft: "auto", marginRight: "auto" }}>
              <input type="text" onChange={this.props.updateParentSearchBar} placeholder={this.props.placeholder} class="nes-input"/>
            </div>
          </div>
      )
  }
}

export default Searchbar
