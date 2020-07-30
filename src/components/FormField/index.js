import React from "react";
import styled from "styled-components";

function FormField({ type, name, onChange, value, label, tag }) {
  const CustomTag = `${tag}`;

  return (
    <div>
      <label>
        {label}
        <CustomTag type={type} name={name} onChange={onChange} value={value} />
      </label>
    </div>
  );
}

export default FormField;
