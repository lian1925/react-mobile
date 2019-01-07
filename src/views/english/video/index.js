import React, { Component } from "react";
import {
  Form,
  Row,
  Col,
  Input,
  Button,
  Icon,
  message,
  Divider,
  Tag,
  Tooltip,
  Pagination
} from "antd";
import Filter from "co/filter";
import Table from "co/table";
import "./index.less";
// import { Table, Divider, Tag } from "antd";

import { get, post } from "util/fetch";

import { log } from "util/log";
import { stringtomore, numbertostring } from "util/tool";

import { filters, columns } from "./data";

export default class index extends Component {
  state = {
    searchButtonLoading: false,
    source: [],
    pagination: {},
    filterResult: {}
  };

  componentDidMount() {
    const pagination = {
      current: 1,
      pageSize: 10,
      showSizeChanger: true,
      onShowSizeChange: this.onPaginationSizeChange,
      onChange: this.onPaginationChange,
      showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
    };
    this.state.pagination = pagination;
    const filterResult = {
      word: "",
      exampleSat: "",
      chineseInterpretation: ""
    };
    this.state.filterResult = filterResult;
    this.updateTable();
  }
  onPaginationSizeChange = (current, size) => {
    let { pagination, filterResult } = this.state;
    pagination.pageSize = size;
    this.state.pagination = pagination;
    this.updateTable();
  };
  onPaginationChange = (page, pageSize) => {
    let { pagination, filterResult } = this.state;
    pagination = { ...pagination, current: page, pageSize };
    this.state.pagination = pagination;

    this.updateTable();
  };
  filterResult = values => {
    // log(values);
    let { pagination, filterResult } = this.state;
    pagination.current = 1;
    filterResult = values;
    Object.keys(filterResult).forEach(item => {
      if (!filterResult[item]) {
        filterResult[item] = "";
      }
    });
    log(filterResult);
    this.state.filterResult = filterResult;
    this.state.pagination = pagination;
    this.updateTable();
  };
  updateTable = () => {
    const { pagination, filterResult } = this.state;
    log(1, pagination, filterResult);
    if (!this.Interceptor()) {
      return;
    }
    this.setState({
      searchButtonLoading: true
    });
    let params = {
      pageNo: pagination.current,
      pageSize: pagination.pageSize,
      ...filterResult
    };
    // params = Object.assign({}, params, values);
    log(params);
    get("/api/english/word", params)
      .then(res => {
        log(2, res.data);
        pagination.total = res.data.count;
        const source = (res.data.data || []).map((item, index) => {
          const temp = {
            key: "0" + (index + 1),
            id: numbertostring(index + 1),
            ...item
          };
          return temp;
        });
        this.setState({
          source,
          pagination
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
  Interceptor = () => {
    return true;
  };
  render() {
    const { searchButtonLoading, source, pagination } = this.state;
    const array = { filters, searchButtonLoading };
    const tableData = { columns, source, pagination };
    return (
      <div>
        <Filter array={array} filterResult={this.filterResult} />
        <Table data={tableData} />
      </div>
    );
  }
}
