import {
  createCategory,
  findCategory,
  updateCategory,
  deleteCategory
} from '../service/category.service.js'

export async function getCategories(req, res) {
  const categories = await findCategory()

  return res.send({ categories })
}

export async function createCategoryHandler(req, res) {
  try {
    const category = await createCategory(req.body)
    res.status(201).json({ message: 'Category created', category })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function deleteCategoryHandler(req, res) {
  try {
    await deleteCategory(req.params.categoryId)
    res.status(201).json({ message: 'Category deleted' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
export async function updateCategoryHandler(req, res) {
  try {
    const category = await updateCategory(req.params.categoryId, req.body)
    res.status(201).json({ message: 'Category updated', category })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
