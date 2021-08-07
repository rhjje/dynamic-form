import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import ObjectItem from '../object-item/object-item';
import ArrayItem from '../array-item/array-item';
import StringItem from '../string-item/string-item';
import './app.css';

import FORM_TEMPLATE from '../form-template';

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [data, setData] = useState(FORM_TEMPLATE);
  const { DocumentName, items } = data;

  const formattingData = (object) => {
    const newObj = JSON.parse(JSON.stringify(object));
    const getProp = (obj) => {
      for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
          if (Array.isArray(obj[key])) {
            const arr = obj[key].filter(Boolean);
            obj[key] = arr;
          }
          if (typeof obj[key] === 'object') {
            getProp(obj[key]);
          }
          if (obj[key] === '') {
            obj[key] = null;
          }
        }
      }
    };

    getProp(newObj);
    return newObj;
  };

  const onSubmitHandler = (value) => {
    const formattingValue = formattingData(value);
    const postData = {
      DocumentName,
      items: formattingValue
    };
    console.log(postData);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
      <legend>{DocumentName}</legend>
      {Object.keys(items).map((item) => {
        if (items[item].type === 'string') {
          return (
            <StringItem
              description={items[item].description}
              register={register}
              formName={item}
              errors={errors}
              rules={items[item].rules}
              key={items[item].description}
            />
          );
        }
        if (items[item].type === 'array') {
          return (
            <ArrayItem
              description={items[item].description}
              register={register}
              formName={item}
              errors={errors}
              rules={items[item].rules}
              items={items[item].items.rules}
              key={items[item].description}
            />
          );
        }
        if (items[item].type === 'object') {
          return (
            <ObjectItem
              description={items[item].description}
              register={register}
              formName={item}
              errors={errors}
              items={items[item].items}
              key={items[item].description}
            />
          );
        }
        return null;
      })}
      <input type="submit" value="Отправить" className="btn btn-success" />
    </form>
  );
};

export default App;
