import React, { Component } from "react";
import { Link } from "react-router";
import { Breadcrumb } from "antd";

const routes = [
  {
    path: "index",
    breadcrumbName: "首页"
  },
  {
    path: "first",
    breadcrumbName: "一级面包屑"
  },
  {
    path: "second",
    breadcrumbName: "当前页面"
  }
];
function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join("/")}>{route.breadcrumbName}</Link>
  );
}
export default class index extends Component {
  render() {
    return (
      <div>
        <Breadcrumb routes={routes} />
      </div>
    );
  }
}
