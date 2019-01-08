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
    label: "注释",
    name: "definition",
    required: false,
    message: "请输入单词",
    placeholder: ""
  },
  {
    label: "例句",
    name: "sampleSentence",
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
    title: "注释",
    dataIndex: "definition",
    key: "definition",
    render: (text, record, index) => {
      return (
        <Popover content={etymaWord(text)} title="Title">
          <span className="stringtomore-collumn">{stringtomore(text)}</span>
        </Popover>
      );
    }
  },
  {
    title: "音标",
    key: "phoneticSymbol",
    dataIndex: "phoneticSymbol",
    render: (text, record, index) => {
      return <span>{`[${text}]`}</span>;
    }
  },
  {
    title: "音标发音",
    key: "pronunciationURL",
    dataIndex: "pronunciationURL",
    render: (text, record, index) => {
      return (
        <Popover content={soundHover(text)} title="详情" trigger="click">
          <span>{stringtomore(text, 8)}</span>
        </Popover>
      );
    }
  },
  {
    title: "图标",
    key: "profilePictureURL",
    dataIndex: "profilePictureURL",
    render: (text, record, index) => {
      return (
        <Popover content={text} title={record.word} placement="right">
          {/* <span className="stringtomore-collumn">{stringtomore(text)}</span> */}
          {imageHover(text)}
        </Popover>
      );
    }
  },
  {
    title: "例句",
    key: "sampleSentence",
    dataIndex: "sampleSentence",
    render: (text, record, index) => {
      return (
        <Popover content={etymaWord(text)} title="详情">
          <span className="stringtomore-collumn">{stringtomore(text)}</span>
        </Popover>
      );
    }
  },
  {
    title: "例句发音",
    key: "sampleSentenceAudio",
    dataIndex: "sampleSentenceAudio",
    render: (text, record, index) => {
      return (
        <Popover content={soundHover(text)} title="详情" trigger="click">
          <span className="stringtomore-collumn">{stringtomore(text, 8)}</span>
        </Popover>
      );
    }
  },
  {
    title: "例句翻译",
    key: "sampleSentenceTranslation",
    dataIndex: "sampleSentenceTranslation",
    render: (text, record, index) => {
      return (
        <Popover content={etymaWord(text)} title="详情">
          <span className="stringtomore-collumn">{stringtomore(text)}</span>
        </Popover>
      );
    }
  },
  {
    title: "例句出处",
    key: "sampleSentenceSource",
    dataIndex: "sampleSentenceSource",
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
