import React from 'react';
import { get } from 'lodash';
import './string-item.css';

const StringItem = ({ label, register, errors, formName,
  rules = { required: false, sizes: { min: 1, max: Infinity } }
}) => {
  const { required, sizes: { min, max } } = rules;
  let warning = '';
  if (get(errors, formName)) {
    warning = ' warning';
  }
  return (
    <div className="mb-3">
      <label htmlFor={label} className="form-label">{label}</label>
      <input
        type="text"
        className={`form-control${warning}`}
        id={label}
        {...register(formName,
          { required:
            { value: required, message: 'Это поле обязательно для заполнения' },
          minLength: { value: min, message: `Слишком мало символов. Должно быть больше или равно ${min}` },
          maxLength: { value: max, message: `Слишком много символов. Должно быть меньше ${max}` }
          })}
      />
      {get(errors, formName) && <p>{get(errors, formName).message}</p>}
    </div>
  );
};

export default StringItem;
