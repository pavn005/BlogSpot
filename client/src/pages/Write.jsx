import React,{ use, useState } from 'react'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import moment from 'moment'

const Write = () => {
  const navigate = useNavigate();
  const state = useLocation().state;
  const  [value, setValue] = useState(state?.desc || '');
  const  [title, setTitle] = useState(state?.title || '');
  const  [file, setFile] = useState(null);
  const  [cat, setCat] = useState(state?.cat || '');  

 const upload = async () => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("http://localhost:5000/api/upload", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      withCredentials: true // Important! This sends the cookie
    });
    return res.data;
  } catch (err) {
    console.error("Error uploading file:", err);
    throw err;
  }
};
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Wait for image upload to complete if there's a file
      let imgUrl = '';
      if (file) {
        imgUrl = await upload(); // Add await here
      }

      const postData = {
        title,
        desc: value,
        cat,
        img: file ? imgUrl : (state?.img || ''),
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      };

      // Add withCredentials for authentication
      const config = {
        withCredentials: true
      };

      if (state) {
        await axios.put(`http://localhost:5000/api/posts/${state.id}`, postData, config);
      } else {
        await axios.post(`http://localhost:5000/api/posts`, postData, config);
      }

      navigate("/"); // Add navigation after successful post
    } catch (err) {
      console.error("Error updating post:", err);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'link', 'image'
  ]

  return (
    <div className='add'>
      <div className="content">
        <input type="text" value={title} placeholder="Title" onChange={e=>setTitle(e.target.value)}/>
        <div className="editorContainer">
            <ReactQuill 
    className='editor' 
    theme="snow" 
    value={value} 
    onChange={setValue}
    modules={modules}
    formats={formats}
/>
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
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat"><input type="radio" checked={cat === 'art'} name='cat' value='art' id='art' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="art">Art</label></div>
          <div className="cat"><input type="radio" checked={cat === 'science'} name='cat' value='science' id='science' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="science">Science</label></div>
          <div className="cat"><input type="radio" checked={cat === 'tech'} name='cat' value='tech' id='tech' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="tech">Technology</label></div>
          <div className="cat"><input type="radio" checked={cat === 'cinema'} name='cat' value='cinema' id='cinema' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="cinema">Cinema</label></div>
          <div className="cat"><input type="radio" checked={cat === 'design'} name='cat' value='design' id='design' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="design">Design</label></div>
          <div className="cat"><input type="radio" checked={cat === 'food'} name='cat' value='food' id='food' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="food">Food</label></div>
        </div>
      </div>
    </div>
  )
}

export default Write