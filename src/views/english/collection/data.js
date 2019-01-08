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
    label: "词库名",
    name: "name",
    required: false,
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
const columns = [
  {
    title: "序号",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "词库id",
    dataIndex: "collection_id",
    key: "collection_id"
  },
  {
    title: "词库名",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "备注",
    dataIndex: "note",
    key: "note"
  },

  {
    title: "操作",
    key: "action",
    width: "120px",
    render: (text, record) => (
      <span>
        <Link to={`/collection-english/edit?${record.collection_id}`}>
          编辑
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
export { filters, columns };
