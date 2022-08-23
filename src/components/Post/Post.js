import React, { useReducer, useState } from "react";
import "./post.css";
import { ACTION_TYPES_POST } from "../../constants/ActionsTypes";
import { INITIAL_STATE, postReducer } from "./postReducer";

const Post = () => {
  /**
   * USANDO USE STATE
   */

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [post, setPost] = useState({});

  // const handleFetch = () => {
  //   setLoading(true);
  //   setError(false);
  //   fetch("https://jsonplaceholder.typicode.com/posts/1")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLoading(false);
  //       setPost(data);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       setError(true);
  //     });
  // };

  /**
   * USANDO USEREDUCER
   */

  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleFetch = () => {
    dispatch({ type: ACTION_TYPES_POST.FETCH_START });
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTION_TYPES_POST.FETCH_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: ACTION_TYPES_POST.FETCH_ERROR });
      });
  };

  return (
    /**
     * USANDO USE STATE
     */

    // <div>
    //   <button onClick={handleFetch}>
    //     {loading ? "Wait..." : "Fetch the post"}
    //   </button>
    //   <p>{post?.title}</p>
    //   <span>{error && "Something went wrong!"}</span>
    // </div>

    /**
     * USANDO USEREDUCER
     */

    <div>
      <button onClick={handleFetch}>
        {state.loading ? "Wait..." : "Fetch the post"}
      </button>
      <p>{state?.post?.title}</p>
      <span>{state.error && "Something went wrong!"}</span>
    </div>
  );
};

export default Post;
