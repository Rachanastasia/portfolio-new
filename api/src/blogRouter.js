import express from 'express'
import { ERRORS } from './utils'
import { handleBlogService } from './blogService'

const blogRouter = express.Router()
blogRouter.get('/', async (_req, res) => {
  try {
    const blog = await handleBlogService()
    return res.set('Access-Control-Allow-Origin', '*').status(200).json(blog)
  } catch (error) {
    const message = `${ERRORS.MEDIUM}: ${error?.message ?? error}`
    if (process.env.NODE_ENV === 'development') console.error(message)
    return res
      .status(400)
      .set('Access-Control-Allow-Origin', '*')
      .json({ message })
  }
})

export default blogRouter
