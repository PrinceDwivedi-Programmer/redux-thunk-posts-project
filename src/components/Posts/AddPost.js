import React, { useState } from "react";
import shortid from "shortid";
import { createPost } from "../../actions/postAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdTitle, MdOutlineContentPaste } from "react-icons/md";
import { AiOutlineFileAdd } from "react-icons/ai";
import "./AddPost.css";
import { ToastContainer,toast } from "react-toastify";

const AddPost = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (!title || !body ) {
      toast.error("please fill in all fields");
    }
    else{
      const new_post = {
        id: shortid.generate(),
        title: title,
        body: body,
      };

      dispatch(createPost(new_post));
      toast.success("Post Added Successfully")

      setTimeout(() =>{

        navigate("/")
        
          },2000)
          
    }
 
    
  };
  return (
    <div className="container">
    <ToastContainer theme="colored" position="top-right" autoClose={1500} />
      <div className="py-4">
        <div className="card shadow w-75 mx-auto ">
          <div className="card-header fw-bold cardheading text-white fs-5">
           <AiOutlineFileAdd size="40" /> Add Post
          </div>
          <div className="card-body">
            <form onSubmit={submitForm}>
              <div className="input-group mb-3">
                <span
                  className="input-group-text mdiconbgcolor"
                  id="basic-addon1"
                >
                  <MdTitle size="25" className="mdicon" />
                </span>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Post Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <span
                  className="input-group-text mdiconbgcolor"
                  id="basic-addon1"
                >
                  <MdOutlineContentPaste size="25" className="mdicon" />
                </span>
                <textarea
                  rows="5"
                  className="form-control form-control-lg"
                  placeholder="Enter Post Body Text"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
              <button className="btn btn-primary mt-2 fw-bold">
                Add New Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
