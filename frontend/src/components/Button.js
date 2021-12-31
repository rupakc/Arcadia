import React from 'react';
import "nes.css/css/nes.min.css";

class Button extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return(
        <div>
          <button type="button" class="nes-btn is-error" onClick={this.props.parentClickHandler}>{this.props.buttonLabel}</button>
        </div>
      )
    }
}

export default Button
