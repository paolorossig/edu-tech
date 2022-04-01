import { Router } from 'express'
import {
  createCategoryHandler,
  deleteCategoryHandler,
  getCategories,
  updateCategoryHandler
} from '../controller/category.controller.js'

const categoryRouter = Router()

categoryRouter
  .route('/api/categories')
  .get(getCategories)
  .post(createCategoryHandler)

categoryRouter
  .route('/api/categories/:categoryId')
  .put(updateCategoryHandler)
  .delete(deleteCategoryHandler)

export default categoryRouter
