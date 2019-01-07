/**
 * 存储sessionStorage
 */
const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, content);
};

/**
 * 获取sessionStorage
 */
const getStore = name => {
  if (!name) return;
  return window.sessionStorage.getItem(name);
};

/**
 * 删除sessionStorage
 */
const removeStore = name => {
  if (!name) return;
  window.sessionStorage.removeItem(name);
};

export { setStore, getStore, removeStore };
