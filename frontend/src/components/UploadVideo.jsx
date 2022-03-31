import React from 'react'
import axios from 'axios'

function UploadVideo() {
  const [form, setForm] = React.useState({
    title: '',
    description: '',
    file: null
  })

  function handleChange(event) {
    const inputValue =
      event.target.name === 'file' ? event.target.files[0] : event.target.value

    setForm({
      ...form,
      [event.target.name]: inputValue
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log({ form })

    const videoData = new FormData()

    videoData.append('videoFile', form.file)
    videoData.append('title', form.title)
    videoData.append('description', form.description)

    axios.post('http://localhost:4000/upload', videoData).then((response) => {
      console.log(response.data)
    })
  }
  return (
    <div>
      <h1>Upload Youtube Video</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            autoComplete="off"
            placeholder="Title"
          />
        </div>
        <div>
          <textarea
            onChange={handleChange}
            type="text"
            name="description"
            autoComplete="off"
            placeholder="Description"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            accept="video/mp4"
            type="file"
            name="file"
            placeholder="Add Video File"
          />
        </div>
        <button type="submit">Upload Video</button>
      </form>
    </div>
  )
}

export default UploadVideo
