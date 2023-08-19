import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_DATA = { color: "", width: 0, height: 0 };
  const [formData, setFormData] = useState(INITIAL_DATA);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_DATA);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color</label>
      <input
        type="text"
        id="color"
        name="color"
        placeholder="Background Color"
        value={formData.color}
        onChange={handleChange}
      ></input>
      <label htmlFor="width">Width</label>
      <input
        type="number"
        id="width"
        name="width"
        placeholder="Width"
        value={formData.width}
        onChange={handleChange}
      ></input>
      <label htmlFor="height">Height</label>
      <input
        type="number"
        id="height"
        name="height"
        placeholder="Height"
        value={formData.height}
        onChange={handleChange}
      ></input>
      <button>Add Box</button>
    </form>
  );
};

export default NewBoxForm;
