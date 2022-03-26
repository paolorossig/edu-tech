import Category from '../model/category.model.js'

export async function createCategory(input) {
  const category = await Category.create(input)
  return category
}

export async function findCategory() {
  const categories = await Category.find({})
  return categories
}

export async function deleteCategory(categoryId) {
  try {
    await Category.findByIdAndDelete(categoryId)
    return 'La categoria se elimino correctamente'
  } catch (error) {
    return 'Ocurrio un error al eliminar la categoria'
  }
}

export async function updateCategory(categoryId, data) {
  try {
    const category = await Category.findByIdAndUpdate(categoryId, data)
    return category
  } catch (error) {
    throw new Error(error)
  }
}
