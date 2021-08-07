import React from 'react';
import { get } from 'lodash';
import './string-item.css';

const StringItem = ({ description, register, formName, errors,
  rules = { required: false, sizes: { min: 1, max: Infinity } }
}) => {
  const { required, sizes: { min, max } } = rules;

  return (
    <div className="mb-3">
      <label htmlFor={description} className="form-label">{description}</label>
      <input
        type="text"
        className={get(errors, formName) ? 'form-control warning' : 'form-control'}
        id={description}
        {...register(formName,
          {
            required: {
              value: required,
              message: 'Это поле обязательно для заполнения'
            },
            minLength: {
              value: min,
              message: `Слишком мало символов. Должно быть ≥ ${min}`
            },
            maxLength: {
              value: max,
              message: `Слишком много символов. Должно быть меньше ${max}`
            }
          })}
      />
      {get(errors, formName) && <p>{get(errors, formName).message}</p>}
    </div>
  );
};

export default StringItem;
