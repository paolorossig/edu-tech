import ReactQuill from 'react-quill'
import EditorToolbar, { modules, formats } from './EditorToolbar'

function InputRichText({ value, onChange, placeholder }) {
  return (
    <div>
      <EditorToolbar toolbarId={'t1'} />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        modules={modules('t1')}
        formats={formats}
      />
    </div>
  )
}

export default InputRichText
