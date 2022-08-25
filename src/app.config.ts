import project from "../config/project";

const pages = require(`./router/${project.projectName}`);
const tabBar = require(`./tabBar/${project.projectName}`);
const window = require(`./windowObject/${project.projectName}`);

export default {
  pages,
  window,
  tabBar
};
