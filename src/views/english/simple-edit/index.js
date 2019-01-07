import React, { Component } from "react";

import "./index.less";
import { itemArray } from "./data";
import Form from "co/form";
import { log } from "util/log";
import { get, post, put } from "util/fetch";
import { message } from "antd";
export default class index extends Component {
  state = {
    minHeight: window.innerHeight - 115,
    confirmButtonLoading: false,
    type: "create", // create and edit
    simpleId: "",
    data: {}
  };
  componentDidMount() {
    this.init();
  }

  init = () => {
    let pathname = this.props.location.pathname;
    let pathnameList = pathname.split("/");
    let type = pathnameList[pathnameList.length - 1];

    let query = this.props.location.search;
    query = query.split("?");
    let simpleId = query[1];
    log(21, simpleId);
    this.setState({
      simpleId,
      type
    });
    if (type === "edit") {
      this.getWordInfo(simpleId);
    }
  };
  getWordInfo = simpleId => {
    const url = `/api/simple/word/${simpleId}`;
    get(url)
      .then(res => {
        let data = res.data.data[0] === undefined ? {} : res.data.data[0];
        log(21, url, data);

        this.setState({
          data
        });
        message.success("查询成功");
      })
      .catch(err => {
        log(3, err);
        message.warn(err.errMsg);
      })
      .finally(() => {
        this.setState({
          confirmButtonLoading: false
        });
      });
  };
  filterResult = (err, values) => {
    if (err) {
      return;
    }
    const { type, simpleId } = this.state;
    console.log(24, type, values);
    if (type === "edit") {
      this.updateWord(simpleId, values);
    } else if (type === "create") {
      log(24, values);
      this.createWord(values);
    }
  };
  updateWord = (simpleId, values) => {
    this.setState({
      confirmButtonLoading: true
    });
    put(`/api/simple/word/${simpleId}`, values)
      .then(res => {
        log(33, res.data);
        message.success("更改成功");
      })
      .catch(err => {
        log(33, 1, err);
        message.warn(err.errMsg);
      })
      .finally(() => {
        this.setState({
          confirmButtonLoading: false
        });
      });
  };
  createWord = values => {
    this.setState({
      confirmButtonLoading: true
    });
    post(`/api/simple/word`, values)
      .then(res => {
        log(24, res.data);
        message.success("新增成功");
      })
      .catch(err => {
        log(24, 1, err);
        message.warn(err.errMsg);
      })
      .finally(() => {
        this.setState({
          confirmButtonLoading: false
        });
      });
  };

  render() {
    const { minHeight, simpleId, data, confirmButtonLoading } = this.state;
    const array = { itemArray, confirmButtonLoading, values: data };
    return (
      <div className="simple-edit-container" style={{ minHeight }}>
        <div className="title">
          <div className="icon" />
          单词编辑
        </div>

        <Form array={array} filterResult={this.filterResult} />
      </div>
    );
  }
}
