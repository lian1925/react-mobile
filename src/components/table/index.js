import React, { PureComponent } from "react";
import { Form, Row, Col, Input, Button, Table, Pagination } from "antd";

import { log } from "util/log";
import "./index.less";

export default class table extends PureComponent {
  render() {
    const { columns, source, pagination } = this.props.data;
    return (
      <div>
        <Table
          className="table"
          columns={columns}
          pagination={pagination}
          dataSource={source}
        />
      </div>
    );
  }
}
