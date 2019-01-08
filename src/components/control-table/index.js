import React, { Component } from "react";

export default class index extends Component {
  render() {
    let { data } = this.props;
    data = Object.keys(data).length === 0 ? [] : data;
    console.log(31, data);
    const word_item = (
      <div>
        {data.map(item => (
          <span key={item.id}>{item.id}</span>
          <span key={item.id}>{item.id}</span>
        ))}
      </div>
    );
    return <div>{word_item}</div>;
  }
}
