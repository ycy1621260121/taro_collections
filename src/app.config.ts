import project from "../config/project";

const pages = require(`./router/${project}`);
const tabBar = require(`./tabBar/${project}`);
const window = require(`./windowObject/${project}`);

export default {
  pages,
  window,
  tabBar
};
