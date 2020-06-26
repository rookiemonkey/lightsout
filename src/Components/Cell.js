import React, {Component} from 'react'

class Cell extends Component {

  handleClick = () => {
    this.props.flipCellsAroundMe(this.props.coordinates);
  }

  render() {

    const classes = "Cell" + (this.props.isLit ? " Cell-lit" : "");

    return (

        <td
            className={classes}
            onClick={this.handleClick}
        >{this.props.coordinates} </td>

    )
  }
}

export default Cell;