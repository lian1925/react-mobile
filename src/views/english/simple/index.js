import React, { Component } from "react";
import { setValue } from "@/redux/simple-word";
import { connect } from "react-redux";
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
import { get, post } from "util/fetch";

import { log } from "util/log";
import { stringtomore, numbertostring } from "util/tool";

import { filters, columns } from "./data";

class index extends Component {
  state = {
    searchButtonLoading: false,
    source: [],
    pagination: this.props.redux.pagination,
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
    this.props.setValue({ pagination });

    this.updateTable();
    log(123, this.props.redux.pagination);
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
    let { pagination, filterResult } = this.state;

    log(123, 2, this.props.redux.pagination);
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
    get("/api/simple/word", params)
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

  createItem = () => {
    this.props.history.push("/simple-english/create");
  };
  render() {
    const { searchButtonLoading, source, pagination } = this.state;
    const array = { filters, searchButtonLoading };
    const tableData = { columns, source, pagination };
    return (
      <div className="simple-container">
        <Filter
          array={array}
          filterResult={this.filterResult}
          createItem={this.createItem}
        />
        <Table data={tableData} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  redux: state.simpleWord
});
const mapDispatchToProps = dispatch => {
  return {
    setValue: value => {
      dispatch(setValue(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
