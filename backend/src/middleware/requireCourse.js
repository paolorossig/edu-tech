import Coursem from '../model/course.model.js'

const requirecourse = async (req, res) => {
  let coursem = await Coursem.find({}).exec()
  res.json({
    ok: true,
    coursem: coursem
  })
}

export default requirecourse
