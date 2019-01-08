import React, { Component } from "react";

import "./index.less";
import { itemArray } from "./data";
import Form from "co/form";
import { log } from "util/log";
import { get, post, put } from "util/fetch";
import { message, Button } from "antd";

const routePath = "/api/english/collection";
const routeWordsPath = "/api/english/collection-word";

import { columns } from "./data";
import Table from "co/table";

export default class index extends Component {
  state = {
    minHeight: window.innerHeight - 115,
    confirmButtonLoading: false,
    type: "create", // create and edit
    simpleId: "",
    data: {},
    wordsData: [],
    pagination: {}
  };
  componentDidMount() {
    this.init();
  }

  init = () => {
    const pagination = {
      current: 1,
      pageSize: 10,
      showSizeChanger: true,
      onShowSizeChange: this.onPaginationSizeChange,
      onChange: this.onPaginationChange,
      showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
    };
    this.state.pagination = pagination;

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
      this.getCollectionWords(simpleId);
    }
  };
  onPaginationSizeChange = (current, size) => {
    let { pagination, simpleId } = this.state;
    pagination.pageSize = size;
    this.state.pagination = pagination;

    this.getCollectionWords(simpleId);
  };
  onPaginationChange = (page, pageSize) => {
    let { pagination, simpleId } = this.state;
    pagination = { ...pagination, current: page, pageSize };
    this.state.pagination = pagination;

    this.getCollectionWords(simpleId);
  };
  getWordInfo = simpleId => {
    const url = `${routePath}/${simpleId}`;
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

  getCollectionWords = simpleId => {
    const { pagination, type } = this.state;

    const url = `${routeWordsPath}`;
    const params = {
      collection_id: simpleId
    };
    get(url, params)
      .then(res => {
        let data = (res.data.data || []).map((item, index) => {
          const temp = {
            key: "0" + (index + 1),
            // id: numbertostring(index + 1),
            id: (pagination.current - 1) * pagination.pageSize + index + 1,
            collection_id: simpleId,
            collection_word_id: item.id,
            type,
            ...item
          };
          return temp;
        });
        log(32, res.data, data);
        this.setState({
          wordsData: data
        });
        log(311, res.data);
      })
      .catch(err => {
        log(32, err);
      })
      .finally(() => {});
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
    put(`${routePath}/${simpleId}`, values)
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
    post(`${routePath}`, values)
      .then(res => {
        log(24, res.data);
        this.props.history.go(-1);
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

  addOneWord = () => {
    let params = `collection_id=${this.state.simpleId}`;
    this.props.history.push("/collection-english/choose?" + params);
  };
  render() {
    const {
      minHeight,
      simpleId,
      data,
      confirmButtonLoading,
      wordsData,
      pagination
    } = this.state;
    const array = { itemArray, confirmButtonLoading, values: data };

    const tableData = { columns, source: wordsData, pagination };
    log(32, wordsData);
    return (
      <div className="simple-edit-container" style={{ minHeight }}>
        <div className="title">
          <div className="icon" />
          词库编辑
        </div>
        <Form array={array} filterResult={this.filterResult} />
        <div className="title">
          <div className="icon" />
          词库管理
          <Button onClick={this.addOneWord} className="btn-add">
            添加
          </Button>
        </div>

        <Table data={tableData} />
      </div>
    );
  }
}
