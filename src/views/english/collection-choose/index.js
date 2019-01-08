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

const routePath = "/api/simple/word";
class index extends Component {
  state = {
    searchButtonLoading: false,
    source: [],
    pagination: {},
    filterResult: {}
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
    let queryString = query[1];
    this.state.simpleId = simpleId;
    this.state.type = type;

    log(33, simpleId, type);

    const pagination = {
      current: this.props.redux.pagination.current,
      pageSize: this.props.redux.pagination.pageSize,
      showSizeChanger: true,
      onShowSizeChange: this.onPaginationSizeChange,
      onChange: this.onPaginationChange,
      showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
    };
    const { filterResult } = this.props.redux;
    this.state.pagination = pagination;
    this.state.filterResult = filterResult;
    this.updateTable();
  };
  onPaginationSizeChange = (current, size) => {
    let { pagination, filterResult } = this.state;
    pagination.pageSize = size;
    this.state.pagination = pagination;
    this.props.setValue({ pagination });

    this.updateTable();
  };
  onPaginationChange = (page, pageSize) => {
    let { pagination, filterResult } = this.state;
    pagination = { ...pagination, current: page, pageSize };
    this.state.pagination = pagination;
    this.props.setValue({ pagination });

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
    this.props.setValue({ pagination, filterResult });
    this.state.pagination = pagination;
    log(21, filterResult);
    this.updateTable();
  };
  updateTable = () => {
    const { pagination, filterResult, simpleId, type } = this.state;
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
    get(routePath, params)
      .then(res => {
        log(2, res.data);
        pagination.total = res.data.count;
        const source = (res.data.data || []).map((item, index) => {
          const temp = {
            // key: "0" + (index + 1),
            // id: numbertostring(index + 1),
            id: (pagination.current - 1) * pagination.pageSize + index + 1,
            collection_id: simpleId,
            collection_word_id: item.id,
            type,
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

  goToLast = () => {
    this.props.history.go(-1);
  };
  render() {
    const {
      searchButtonLoading,
      source,
      pagination,
      filterResult
    } = this.state;
    const array = { filters, searchButtonLoading, values: filterResult };
    const tableData = { columns, source, pagination };
    return (
      <div className="simple-container">
        <Filter
          array={array}
          filterResult={this.filterResult}
          createItem={this.createItem}
        />
        <div className="header">
          <Button type="primary" onClick={this.goToLast} className="btn-back">
            返回
          </Button>
        </div>
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
