import React,{ useState } from 'react'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import axios from 'axios'

const Write = () => {
  const  [value, setValue] = useState('');
  const  [title, setTitle] = useState('');
  const  [file, setFile] = useState(null);
  const  [cat, setCat] = useState('');  

  const upload = async () => {
  try{
    const formData = new FormData();
    formData.append("file",file);
    const res = await axios.post("http://localhost:5000/api/upload", formData)
    console.log(res.data);
  }catch(err){
    console.log("Error uploading file:", err);
  }

  }
  
  
  const handleChange = async e => {
    e.preventDefault();
    upload();
  
  }

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder="Title" onChange={e=>setTitle(e.target.value)}/>
        <div className="editorContainer">
            <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />;
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span><br /><br/>
          <span>
            <b>Visibility:</b> Public
          </span><br/><br/>
          <input type="file" style={{display: "none"}} id="file" onChange={e=>setFile(e.target.files[0])} />
          <label className='file' htmlFor="file">Upload Image</label><br/><br/>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleChange}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat"><input type="radio" name='cat' value='art' id='art' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="art">Art</label></div>
          <div className="cat"><input type="radio" name='cat' value='science' id='science' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="science">Science</label></div>
          <div className="cat"><input type="radio" name='cat' value='tech' id='tech' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="tech">Technology</label></div>
          <div className="cat"><input type="radio" name='cat' value='cinema' id='cinema' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="cinema">Cinema</label></div>
          <div className="cat"><input type="radio" name='cat' value='design' id='design' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="design">Design</label></div>
          <div className="cat"><input type="radio" name='cat' value='food' id='food' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="food">Food</label></div>
        </div>
      </div>
    </div>
  )
}

export default Write