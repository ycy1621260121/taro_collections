import project from "../config/project";
const pages = require(`./router/${project}`);
const tabBar = require(`./tabBar/${project}`);

export default {
  pages,
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar
};
