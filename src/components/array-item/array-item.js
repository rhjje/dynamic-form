import React, { useState } from 'react';
import './array-item.css';

const ArrayItem = ({ description }) => {
  const [items, setItems] = useState([
    { id: '1', trashIcon: false, fieldFilled: false }
  ]);

  const addField = () => {
    setItems((prevState) => {
      return [
        ...prevState,
        {
          id: Date.now().toString(),
          trashIcon: true,
          fieldFilled: false
        }
      ];
    });
  };

  const deleteField = (id) => {
    const index = items.findIndex((item) => item.id === id);
    setItems((prevState) => {
      return [
        ...prevState.slice(0, index),
        ...prevState.slice(index + 1)
      ];
    });
  };

  const onToggleFilled = (value, id) => {
    const index = items.findIndex((item) => item.id === id);
    if (value.length > 0) {
      const item = { ...items[index], fieldFilled: true };
      setItems((prevState) => {
        return [
          ...prevState.slice(0, index),
          item,
          ...prevState.slice(index + 1)
        ];
      });
    }
    if (value.length === 0) {
      const item = { ...items[index], fieldFilled: false };
      setItems((prevState) => {
        return [
          ...prevState.slice(0, index),
          item,
          ...prevState.slice(index + 1)
        ];
      });
    }
  };

  let button = (
    <button type="button" className="btn btn-outline-success" onClick={addField}>Добавить</button>
  );
  if (items[items.length - 1].fieldFilled === false) {
    button = <button disabled type="button" className="btn btn-outline-secondary" onClick={addField}>Добавить</button>;
  }

  return (
    <div className="array-field wrapper">
      <legend className="form-label form-label__array">{description}</legend>
      {items.map((item) => {
        return (
          <TextField
            trashIcon={item.trashIcon}
            onDelete={() => deleteField(item.id)}
            onFilled={onToggleFilled}
            key={item.id}
            id={item.id}
          />
        );
      })}
      {button}
    </div>
  );
};

const TextField = ({ trashIcon, onDelete, onFilled, id }) => {
  return (
    <div className="array-field-both">
      <input
        type="text"
        className="form-control array-field__line"
        onChange={(event) => onFilled(event.target.value, id)}
      />
      {trashIcon ? <i className="bi bi-trash icon-trash" onClick={onDelete} /> : null}
    </div>
  );
};

export default ArrayItem;
