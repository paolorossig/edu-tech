import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema(
  {
    courseName: { type: String },
    courseDescription: { type: String },
    courseCategory: { type: String },
    courseKeywords: { type: String },
    coursePrice: { type: String },
    courseNumberLessons: { type: String },
    courseLanguage: { type: String },
    courseImageURL: { type: String },
    courseIdTeacher: { type: String },
    courseScore: { type: String }
  },
  { timestamps: true }
)

const Course = mongoose.model('Course', courseSchema)

export default Course
