import { getTagOwner } from '../../dbFuncs';

export default defineEventHandler(async (event) => {
  const tagId = parseInt(getRouterParam(event, "id")!, 10)
  if (isNaN(tagId)) {
    throw createError({ status: 410, statusMessage: "Tag ID is not a number" })
  }
  return await getTagOwner(tagId)
})
