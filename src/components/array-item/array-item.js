import React, { useState } from 'react';
import { get } from 'lodash';
import './array-item.css';

const ArrayItem = ({
  description, register, formName, errors,
  rules = { sizes: { max: Infinity } },
  items = { type: 'string', rules: { sizes: { min: 1, max: Infinity } } }
}) => {
  const { sizes: { max } } = rules;
  const { rules: { sizes: { min: minLength, max: maxLength } } } = items;

  const [fields, setfields] = useState([
    { id: '1', trashIcon: false, fieldFilled: false }
  ]);

  const addField = () => {
    setfields((prevState) => {
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
    const index = fields.findIndex((item) => item.id === id);
    setfields((prevState) => {
      return [
        ...prevState.slice(0, index),
        ...prevState.slice(index + 1)
      ];
    });
  };

  const onToggleFilled = (value, id) => {
    const index = fields.findIndex((item) => item.id === id);
    if (value.length > 0) {
      const item = { ...fields[index], fieldFilled: true };
      setfields((prevState) => {
        return [
          ...prevState.slice(0, index),
          item,
          ...prevState.slice(index + 1)
        ];
      });
    }
    if (value.length === 0) {
      const item = { ...fields[index], fieldFilled: false };
      setfields((prevState) => {
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
  if (fields[fields.length - 1].fieldFilled === false) {
    button = <button disabled type="button" className="btn btn-outline-secondary" onClick={addField}>Добавить</button>;
  }
  if (fields.length >= max) {
    button = null;
  }

  return (
    <div className="array-field wrapper">
      <legend className="form-label form-label__array">{description}</legend>
      {fields.map((item, i) => {
        return (
          <TextField
            formName={formName}
            errors={errors}
            register={register}
            number={i}
            trashIcon={item.trashIcon}
            onDelete={() => deleteField(item.id)}
            onFilled={onToggleFilled}
            key={item.id}
            id={item.id}
            min={minLength}
            max={maxLength}
          />
        );
      })}
      {button}
    </div>
  );
};

const TextField = ({
  trashIcon, onDelete, onFilled, id, register, formName, number, min, max, errors
}) => {
  let warning = '';
  if (get(errors, formName)) {
    warning = ' warning';
  }
  return (
    <>
      <div className="array-field-both">
        <input
          {...register(`${formName}.${number}`,
            {
              minLength: { value: min, message: `Слишком мало символов. Должно быть больше или равно ${min}` },
              maxLength: { value: max, message: `Слишком много символов. Должно быть меньше ${max}` }
            })}
          type="text"
          className={`form-control array-field__line${warning}`}
          onChange={(event) => onFilled(event.target.value, id)}
        />
        {trashIcon ? <i className="bi bi-trash icon-trash" onClick={onDelete} /> : null}
      </div>
      {get(errors, `${formName}.${number}`) && <p>{get(errors, `${formName}.${number}`).message}</p>}
    </>
  );
};

export default ArrayItem;
