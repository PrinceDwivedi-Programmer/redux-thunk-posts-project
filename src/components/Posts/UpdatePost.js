import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, updatePost } from "../../actions/postAction";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { MdTitle, MdOutlineContentPaste } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

const UpdatePost = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    loadPost();
  }, []);
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);
  const loadPost = () => {
    dispatch(getPost(id));
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (!title || !body) {
      toast.error("please fill in all fields");
    } else {
      const update_post = {
        id: post.id,
        title: title,
        body: body,
      };
      dispatch(updatePost(update_post));
      toast.success("Post Updated Successfully");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };
  return (
    <div className="container">
      <ToastContainer theme="colored" position="top-right" autoClose={1500} />
      <div className="py-4">
        <div className="card shadow w-75 mx-auto ">
          <div className="card-header fw-bold cardheading text-white fs-5">
            <BiEdit size="40" /> Update Post
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
              <button className="btn btn-warning mt-2 fw-bold">
                UpdatePost
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
