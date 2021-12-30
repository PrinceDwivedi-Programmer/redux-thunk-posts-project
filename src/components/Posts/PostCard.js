import React,{useEffect} from "react";
import { deletePost } from "../../actions/postAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsArrowRightSquare } from "react-icons/bs";
import "./PostCard.css";
import EllipsisText from "react-ellipsis-text";
const PostCard = ({ postItem }) => {
  const dispatch = useDispatch();


  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card custom-card">
        <img
          src={`https://source.unsplash.com/collection/${postItem.id}/1600x900`}
          alt={postItem.title}
          className="card-img-top"
          height={150}
          width={100}
        />
        <Link
          to={`/updatePost/${postItem.id}`}
          className="btn btn-warning text-white btn-edit "
        >
          <span className="material-icons ">edit</span>
        </Link>
        <button
          className="btn btn-danger btn-delete"
          onClick={() => dispatch(deletePost(postItem.id))}
        >
          <span class="material-icons">delete_outline</span>
        </button>
        <div className="card-body">
          <h6 className="text-secondary">{postItem.title}</h6>
          <EllipsisText text={postItem.body} length={"100"} />
        </div>
        <div className="card-footer">
          <Link
            to={`/post/${postItem.id}`}
            className="btn btn-default"
            style={{ backgroundColor: "#16A085", color: "white" }}
          >
            <span className="mb-1"> Read More</span>
            <span className="mx-2">
              <BsArrowRightSquare size="30" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
