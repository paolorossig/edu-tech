import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema(
  {
    description: { type: String, required: true, unique: true } // authProvider: { type: String, required: true, default: '' }
  },
  { timestamps: true }
)

const Category = mongoose.model('Category', categorySchema)

export default Category
