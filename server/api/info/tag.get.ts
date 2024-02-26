import { ensureAuth } from '../auth/session.get';
import { getTagOwner } from '../dbFuncs';

export default defineEventHandler(async (event) => {
  interface bodyData {
    tagId: string
  }

  return await getTagOwner((await readBody(event)).tagId)
})
