import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema(
  {
    course_name: { type: String },
    course_description: { type: String },
    course_category: { type: String },
    course_keywords: { type: String },
    course_price: { type: String },
    course_numberlessons: { type: String },
    course_language: { type: String },
    course_imageURL: { type: String },
    course_IDteacher: { type: String },
    course_score: { type: String }
  },
  { timestamps: true }
)

const Coursem = mongoose.model('Coursem', courseSchema)

export default Coursem
