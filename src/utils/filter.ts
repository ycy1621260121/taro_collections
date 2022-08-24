import project from "../../config/project";

export const filterRouter = async (pages: any) => {
  let baseUrl = `pages/${project}/`;
  let page = pages.map(item => {
    return item = baseUrl + item
  })
  setTimeout(() => {
    console.log('page**********', page)
    return page
  })
}
