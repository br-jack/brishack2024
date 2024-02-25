export default eventHandler(async (event) => {
  interface bodyData {
    name: string,
    username: string,
    password: string,
  }
  const result: bodyData = await readBody(event)

})
