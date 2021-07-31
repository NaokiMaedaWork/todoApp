import React from 'react';

/**
 * 現在日時の表示
 */
class DisplayDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentDate: new Date()};
  }
  tick() {
    this.setState({
      currentDate: new Date()
    });
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render(){
    return (
        <div className="current_date">{
          this.state.currentDate.toLocaleString("Ja")}
        </div>
    )
  }
}
export default DisplayDate;