import React from 'react'

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
  const footerstyle =  {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%"
  }
    return(
        <div>
        <footer>
          <section style={footerstyle} class="icon-list">
            <i class="nes-mario" style={{float:"left"}}></i>
            <i class="nes-ash" style={{float:"left"}}></i>
            <i class="nes-pokeball" style={{float:"left"}}></i>
            <i class="nes-bulbasaur" style={{float:"right"}}></i>
            <i class="nes-charmander" style={{float:"right"}}></i>
            <i class="nes-squirtle"style={{float:"right"}}></i>
          </section>
        </footer>
        </div>
    );
  }
}

export default Footer
