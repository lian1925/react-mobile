import React, { Component } from "react";
import { get, post } from "util/fetch";
import { log } from "util/log";
import "./index.less";
import { message, Button } from "antd";
export default class index extends Component {
  state = {
    minHeight: window.innerHeight - 115,
    simpleId: "",
    data: {}
  };
  componentDidMount() {
    let query = this.props.location.search;
    query = query.split("?");
    let simpleId = query[1];
    log(22, query);
    this.setState({
      simpleId
    });
    this.updateWord(simpleId);
  }
  updateWord = simpleId => {
    const url = `/api/english/word/${simpleId}`;
    log(111, url);
    get(url)
      .then(res => {
        log(2, res.data);
        this.setState({
          data: res.data.data[0] === undefined ? {} : res.data.data[0]
        });
        message.success("查询成功");
      })
      .catch(err => {
        log(3, err);
        message.warn(err.errMsg);
      })
      .finally(() => {
        this.setState({
          searchButtonLoading: false
        });
      });
  };

  gotoLastPage = () => {
    log(123, this.props.history);
    this.props.history.go(-1);
  };
  render() {
    const { minHeight, simpleId, data } = this.state;
    log(23, data);
    return (
      <div className="simple-edit-container" style={{ minHeight }}>
        <div className="title">
          <div className="icon" />
          单词详情
        </div>
        <p>
          <span className="key">单词</span>
          <span>{data.word}</span>
        </p>
        <p>
          <span className="key">单词ID</span>
          <span>{data.word_id}</span>
        </p>

        <p>
          <span className="key">单词翻译</span>
          <span>{data.chineseInterpretation}</span>
        </p>
        <p>
          <span className="key">例句</span>
          <span>{data.exampleSat}</span>
        </p>

        <p>
          <span className="key">词根</span>
          <span>{data.etymaWord}</span>
        </p>

        <p>
          <span className="key">词组</span>
          <span>{data.wordGroup}</span>
        </p>

        <p>
          <span className="key">视频</span>
          <span>{data.aliVideoUrl}</span>
        </p>

        <Button onClick={this.gotoLastPage}>返回</Button>
      </div>
    );
  }
}
