import React, { useLayoutEffect, useEffect } from "react";
import axios from "axios";

export const handleFetch = () => {
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

useLayoutEffect(() => handleFetch(), []);
