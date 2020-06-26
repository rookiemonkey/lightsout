import React, {Component} from 'react'

class Cell extends Component {

  handleClick = () => {
    this.props.flipCellsAroundMe(this.props.coordinates);
  }

  render() {

    const classes = "Cell" + (this.props.isLit ? " Cell-lit" : "");

    return (
        <td className={classes} onClick={this.handleClick} />
    )
  }
}

export default Cell;