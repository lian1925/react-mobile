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
    label: "单词",
    name: "word",
    required: false,
    message: "请输入单词",
    placeholder: ""
  },
  {
    label: "句子",
    name: "exampleSat",
    required: false,
    message: "请输入单词",
    placeholder: ""
  },
  {
    label: "注释",
    name: "chineseInterpretation",
    required: false,
    message: "请输入单词",
    placeholder: ""
  }
];
const columns = [
  {
    title: "序号",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "单词",
    dataIndex: "word",
    key: "word"
  },
  {
    title: "视频",
    dataIndex: "aliVideoUrl",
    key: "aliVideoUrl",
    render: (text, record, index) => {
      return <Tooltip title={text}>{videoHover(text)}</Tooltip>;
    }
  },
  {
    title: "注释",
    dataIndex: "chineseInterpretation",
    key: "chineseInterpretation",
    render: (text, record, index) => {
      return (
        <Popover content={etymaWord(text)} title="Title">
          <span className="stringtomore-collumn">{stringtomore(text)}</span>
        </Popover>
      );
    }
  },
  {
    title: "句子",
    key: "exampleSat",
    dataIndex: "exampleSat",
    render: (text, record, index) => {
      return (
        <Popover content={etymaWord(text)} title="详情">
          <span className="stringtomore-collumn">{stringtomore(text)}</span>
        </Popover>
      );
    }
  },
  {
    title: "词根",
    key: "etymaWord",
    dataIndex: "etymaWord",
    render: (text, record, index) => {
      return (
        <Popover content={etymaWord(text)} title="详情">
          <span className="stringtomore-collumn">{stringtomore(text)}</span>
        </Popover>
      );
    }
  },
  {
    title: "词组",
    key: "wordGroup",
    dataIndex: "wordGroup",
    render: (text, record, index) => {
      return (
        <Popover content={etymaWord(text)} title="详情">
          <span className="stringtomore-collumn">{stringtomore(text)}</span>
        </Popover>
      );
    }
  },
  {
    title: "操作",
    key: "action",
    width: "120px",
    render: (text, record) => (
      <span>
        <Link to={`/simple-english/detail?${record.simple_id}`}>详情</Link>
        <Divider type="vertical" />
        <Link to={`/simple-english/edit?${record.simple_id}`}>编辑</Link>
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

const videoHover = text => (
  <video width="250" height="auto" src={text} controls />
);
export { filters, columns };
