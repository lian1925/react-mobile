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
  Pagination,
  Popover
} from "antd";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import { log } from "util/log";
import { stringtomore, numbertostring } from "util/tool";
const filters = [
  {
    label: "题目",
    name: "content",
    required: false,
    message: "请输入题目",
    placeholder: ""
  },
  {
    label: "答案选项",
    name: "optionList",
    required: false,
    message: "请输入答案选项",
    placeholder: ""
  },
  {
    label: "答案",
    name: "answer",
    required: false,
    message: "请输入答案",
    placeholder: ""
  },
  {
    label: "分析",
    name: "analysis",
    required: false,
    message: "请输入分析",
    placeholder: ""
  }
];
const columns = [
  {
    title: "序号",
    dataIndex: "key",
    key: "key",
    className: "table-collumn"
  },
  {
    title: "题目",
    dataIndex: "content",
    key: "content",
    className: "table-collumn w-20"
  },
  {
    title: "答案选项",
    dataIndex: "optionList",
    key: "optionList",
    className: "table-collumn w-20"
  },
  {
    title: "答案",
    dataIndex: "answer",
    key: "answer",
    className: "table-collumn"
  },
  {
    title: "考题分析",
    dataIndex: "analysis",
    key: "analysis",
    className: "table-collumn w-20"
  },
  {
    title: "考试类型",
    dataIndex: "examTypeName",
    key: "examTypeName",
    className: "table-collumn w-20"
  },
  {
    title: "材料",
    dataIndex: "material",
    key: "material",
    className: "table-collumn w-20"
  },
  {
    title: "操作",
    key: "action",
    width: "120px",
    render: (text, record) => (
      <span>
        <Link to={`/accountant-exam/edit?${record.id}`}>编辑</Link>
      </span>
    )
  }
];
const etymaWord = text => (
  <div>
    {text.split("\n").map((i, key) => {
      return <div key={key}>{i}</div>;
    })}
  </div>
);
const imageHost = "https://jiguangdanci.easylesson.cn";
const imageHover = text => (
  <div>
    <img className="image-hover" src={imageHost + text} alt="" />
  </div>
);
const soundHover = text => (
  <div>
    <audio controls autoPlay className="audio" src={imageHost + text} />
  </div>
);
export { filters, columns };
