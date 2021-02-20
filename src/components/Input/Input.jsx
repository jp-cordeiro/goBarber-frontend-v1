import React, { useEffect, useState } from "react";
import { Input as UnformInput } from "@rocketseat/unform";
import "./styles.scss";

export default function Input({ label, ...restProps }) {
  const [value, setValue] = useState(null);

  return (
    <div className="group">
      <UnformInput
        type="text"
        className="form-input"
        {...restProps}
        onChange={({ target }) => setValue(target.value)}
      />
      {label ? (
        <label
          className={`${
            value && value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
