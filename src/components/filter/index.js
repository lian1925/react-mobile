import React, { Component } from "react";
import { Form, Row, Col, Input, Button, Icon } from "antd";

import { log } from "util/log";
import "./index.less";

class index extends Component {
  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      // console.log("Received values of form: ", values);
      this.props.filterResult(values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  createItem = () => {
    this.props.createItem();
  };
  render() {
    const { array } = this.props;
    const { getFieldDecorator } = this.props.form;
    log("filter-props", this.props);

    const formItemArray = (
      <div>
        {(array.filters || []).map((item, k) => (
          <Col span={8} key={`form-item-${k}`} style={{ display: "block" }}>
            <Form.Item label={item.label}>
              {getFieldDecorator(item.name, {
                rules: [
                  {
                    required: item.rquired,
                    message: item.message
                  }
                ]
              })(<Input placeholder={item.placeholder} />)}
            </Form.Item>
          </Col>
        ))}
      </div>
    );
    return (
      <div>
        <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
          <Row gutter={24}>{formItemArray}</Row>
          <Row>
            <Col span={24} style={{ textAlign: "right" }}>
              <Button
                loading={array.searchButtonLoading}
                type="primary"
                htmlType="submit"
              >
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                清空
              </Button>
              <Button
                style={{ marginLeft: 8 }}
                type="primary"
                onClick={this.createItem}
              >
                新建
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
const WrappedIndex = Form.create()(index);

export default WrappedIndex;
