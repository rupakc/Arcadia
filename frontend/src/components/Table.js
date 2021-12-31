import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div style={{display:"flex", justifyContent:"center"}}>
      <div class="nes-table-responsive">
        <table class="nes-table is-bordered is-centered">
        <thead>
          <tr>
              {this.props.tableDataJson.headerList.map((header,index) =>
                <th key={index}> {header} </th>
              )}
          </tr>
        </thead>
        <tbody>
          {this.props.tableDataJson.dataList.map((dataRow,index) =>
            <tr>
                {dataRow.map((data,index) =>
                  <td key={index}> {data} </td>
                )}
            </tr>
          )}
        </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Table;
