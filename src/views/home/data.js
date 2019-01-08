import about from "@/views/about";

import simple from "@/views/english/simple";
import simpleEdit from "@/views/english/simple-edit";
import simpleDetail from "@/views/english/simple-detail";

import video from "@/views/english/video";
import videoEdit from "@/views/english/video-edit";
import videoDetail from "@/views/english/video-detail";

import collection from "@/views/english/collection";
import collectionEdit from "@/views/english/collection-edit";
import collectionChoose from "@/views/english/collection-choose";

import accountant from "@/views/exam/accountant";
import accountantEdit from "@/views/exam/accountant-edit";

export const bread = {
  edit: { title: "编辑" },
  detail: { title: "详情" },
  create: { title: "新增" },
  choose: { title: "添加" },
  replace: { title: "替换" }
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
    page: video
  },
  {
    path: "/video-english/edit",
    exact: true,
    title: "编辑",
    page: videoEdit
  },
  {
    path: "/video-english/create",
    exact: true,
    title: "新增",
    page: videoEdit
  },
  {
    path: "/video-english/detail",
    exact: true,
    title: "详情",
    page: videoDetail
  },
  {
    path: "/collection-english",
    exact: true,
    title: "词库",
    page: collection
  },
  {
    path: "/collection-english/edit",
    exact: true,
    title: "编辑",
    page: collectionEdit
  },
  {
    path: "/collection-english/create",
    exact: true,
    title: "新增",
    page: collectionEdit
  },
  {
    path: "/collection-english/choose",
    exact: true,
    title: "添加",
    page: collectionChoose
  },
  {
    path: "/collection-english/replace",
    exact: true,
    title: "更换",
    page: collectionChoose
  },
  {
    path: "/accountant-exam",
    exact: true,
    title: "会计",
    page: accountant
  },
  {
    path: "/accountant-exam/edit",
    exact: true,
    title: "编辑",
    page: accountantEdit
  },
  {
    path: "/accountant-exam/create",
    exact: true,
    title: "新增",
    page: accountantEdit
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
      },
      {
        title: "词库",
        route: "/collection-english",
        key: 4
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
