import about from "@/views/about";
import English from "@/views/english/video";
import simple from "@/views/english/simple";
import simpleEdit from "@/views/english/simple-edit";
import simpleDetail from "@/views/english/simple-detail";

import accountant from "@/views/exam/accountant";
import ant from "@/views/ant/table";

export const bread = {
  edit: { title: "编辑" },
  detail: { title: "详情" },
  create: { title: "新增" }
};

export const routes = [
  {
    path: "/",
    exact: true,
    title: "首页",
    page: simple
  },
  {
    path: "/about",
    exact: true,
    title: "关于",
    page: about
  },
  {
    path: "/simple-english",
    exact: true,
    title: "简单单词",
    page: simple
  },
  {
    path: "/simple-english/edit",
    exact: true,
    title: "编辑",
    page: simpleEdit
  },
  {
    path: "/simple-english/create",
    exact: true,
    title: "新增",
    page: simpleEdit
  },
  {
    path: "/simple-english/detail",
    exact: true,
    title: "详情",
    page: simpleDetail
  },
  {
    path: "/video-english",
    exact: true,
    title: "视频单词",
    page: English
  },
  {
    path: "/accountant-exam",
    exact: true,
    title: "会计",
    page: accountant
  }
];

export const menu_obj = [
  {
    title: "英语",
    icon: "mail",
    key: 1,
    children: [
      {
        title: "基本单词",
        route: "/simple-english",
        key: 2
      },
      {
        title: "视频单词",
        route: "/video-english",
        key: 3
      }
    ]
  },
  {
    title: "考试",
    icon: "mail",
    key: 21,
    children: [
      {
        title: "会计",
        route: "/accountant-exam",
        key: 22
      },
      {
        title: "法律",
        route: "/legal",
        key: 23
      }
    ]
  }
];
