import React, { Component } from "react";
import { Form, Row, Col, Input, Button, Icon } from "antd";
import { withRouter } from "react-router";

import { log } from "util/log";
import "./index.less";
import TextArea from "antd/lib/input/TextArea";

class index extends Component {
  componentDidMount() {
    const { match, location, history } = this.props;
    log(22, location);
  }
  componentDidUpdate(prevProps) {
    if (this.props.array.values !== prevProps.array.values) {
      this.initValues();
    }
  }
  initValues = () => {
    this.props.form.setFieldsValue(this.props.array.values);
  };
  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      log(32, err);
      this.props.filterResult(err, values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  gotoLast = () => {
    this.props.history.go(-1);
  };
  render() {
    const { array } = this.props;
    const { getFieldDecorator } = this.props.form;
    log("filter-props", this.props);
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 3 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 21 }
      }
    };
    console.log(111, array);
    const formItemArray = (
      <div>
        {(array.itemArray || []).map((item, k) => (
          <Form.Item
            {...formItemLayout}
            key={`form-item-${k}`}
            label={item.label}
          >
            {getFieldDecorator(item.name, {
              rules: [
                {
                  required: item.required,
                  message: item.message
                }
              ]
            })(
              item.type === "textarea" ? (
                <TextArea placeholder={item.placeholder} rows="10" />
              ) : (
                <Input placeholder={item.placeholder} />
              )
            )}
          </Form.Item>
        ))}
      </div>
    );
    return (
      <div className="form-container">
        <Form onSubmit={this.handleSearch}>
          {formItemArray}
          <Button className="cancel" onClick={this.gotoLast}>
            返回
          </Button>
          <Button
            className="confirm"
            type="primary"
            loading={array.confirmButtonLoading}
            htmlType="submit"
          >
            确认
          </Button>
        </Form>
      </div>
    );
  }
}
const WrappedIndex = Form.create()(index);

export default withRouter(WrappedIndex);
