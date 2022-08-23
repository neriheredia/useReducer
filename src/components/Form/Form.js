import React, { useReducer, useRef, useState } from "react";
import { ACTION_TYPES_FORM } from "../../constants/ActionsTypes";
import { formReducer, INITIAL_STATE } from "./formReducer";
import "./form.css";

const Form = () => {
  // USING USESTATE

  // const [product, setProduct] = useState({
  //   title: "",
  //   desc: "",
  //   price: 0,
  //   category: "",
  //   tags: [],
  //   images: {
  //     sm: "",
  //     md: "",
  //     lg: "",
  //   },
  //   quantity: 0,
  // });
  // console.log(product);
  // const handleChange = (e) => {
  //   setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const tagRef = useRef();

  // const handleTags = () => {
  //   const tags = tagRef.current.value.split(",");
  //   tags.forEach((tag) => {
  //     setProduct((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
  //   });
  // };

  // const handleRemoveTag = (tag) => {
  //   setProduct((prev) => ({
  //     ...prev,
  //     tags: prev.tags.filter((t) => t !== tag),
  //   }));
  // };

  // const handleIncrease = () => {
  //   setProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  // };

  // const handleDecrease = () => {
  //   setProduct((prev) => ({
  //     ...prev,
  //     quantity: prev.quantity - 1,
  //   }));
  // };

  //USING USEREDUCER

  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const tagRef = useRef();

  const handleChange = (e) => {
    dispatch({
      type: ACTION_TYPES_FORM.CHANGE_INPUT,
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    tags.forEach((tag) => {
      dispatch({ type: ACTION_TYPES_FORM.ADD_TAG, payload: tag });
    });
  };
  console.log(state);
  return (
    // USING USESTATE

    // <div>
    //   <form>
    //     <input
    //       type="text"
    //       name="title"
    //       onChange={handleChange}
    //       placeholder="Title"
    //     />
    //     <input
    //       type="text"
    //       name="desc"
    //       onChange={handleChange}
    //       placeholder="Desc"
    //     />
    //     <input
    //       type="number"
    //       name="price"
    //       onChange={handleChange}
    //       placeholder="Price"
    //     />
    //     <p>Category:</p>
    //     <select name="category" id="category" onChange={handleChange}>
    //       <option value="sneakers">Sneakers</option>
    //       <option value="tshirts">T-shirts</option>
    //       <option value="jeans">Jeans</option>
    //     </select>
    //     <p>Tags:</p>
    //     <textarea
    //       ref={tagRef}
    //       placeholder="Seperate tags with commas..."
    //     ></textarea>
    //     <button type="button" onClick={handleTags}>
    //       Add Tags
    //     </button>
    //     <div className="tags">
    //       {product.tags.map((tag) => (
    //         <small key={tag} onClick={() => handleRemoveTag(tag)}>
    //           {tag}
    //         </small>
    //       ))}
    //     </div>
    //     <div className="quantity">
    //       <button type="button" onClick={handleDecrease}>
    //         -
    //       </button>
    //       <span>Quantity ({product.quantity})</span>
    //       <button type="button" onClick={handleIncrease}>
    //         +
    //       </button>
    //     </div>
    //   </form>
    // </div>

    //USING USEREDUCER

    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          onChange={handleChange}
          name="title"
        />
        <input
          type="text"
          placeholder="Desc"
          onChange={handleChange}
          name="desc"
        />
        <input
          type="number"
          placeholder="Price"
          onChange={handleChange}
          name="price"
        />
        <p>Category:</p>
        <select onChange={handleChange} name="category">
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-shirts</option>
          <option value="jeans">Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea
          ref={tagRef}
          placeholder="Seperate tags with commas..."
        ></textarea>
        <button onClick={handleTags} type="button">
          Add Tags
        </button>
        <div className="tags">
          {state.tags.map((tag) => (
            <small
              onClick={() =>
                dispatch({ type: ACTION_TYPES_FORM.REMOVE_TAG, payload: tag })
              }
              key={tag}
            >
              {tag}
            </small>
          ))}
        </div>
        <div className="quantity">
          <button
            onClick={() => dispatch({ type: ACTION_TYPES_FORM.DECREASE })}
            type="button"
          >
            -
          </button>
          <span>Quantity ({state.quantity})</span>
          <button
            onClick={() => dispatch({ type: ACTION_TYPES_FORM.INCREASE })}
            type="button"
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
