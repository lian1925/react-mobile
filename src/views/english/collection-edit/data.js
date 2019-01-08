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

export const itemArray = [
  {
    label: "词库名",
    name: "name",
    value: "name",
    required: true,
    message: "请输入词库名",
    placeholder: ""
  },
  {
    label: "备注",
    name: "note",
    required: false,
    message: "请输入备注",
    placeholder: ""
  }
];

export const columns = [
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
    title: "操作",
    key: "action",
    width: "120px",
    render: (text, record) => (
      <span>
        <Link
          to={`/collection-english/replace?collection_id=${
            record.collection_id
          }&collection_word_id=${record.collection_word_id}`}
        >
          更换
        </Link>
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
