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

  const onSubmitHandler = (value) => {
    const postData = {
      DocumentName,
      items: value
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
              errors={errors}
              rules={items[item].rules}
              register={register}
              formName={item}
              label={items[item].description}
              key={items[item].description}
            />
          );
        }
        if (items[item].type === 'array') {
          return (
            <ArrayItem
              register={register}
              formName={item}
              items={items[item].items}
              description={items[item].description}
              key={items[item].description}
            />
          );
        }
        if (items[item].type === 'object') {
          return (
            <ObjectItem
              errors={errors}
              register={register}
              formName={item}
              items={items[item].items}
              description={items[item].description}
              key={items[item].description}
            />
          );
        }
        return null;
      })}
      <input type="submit" className="btn btn-success" />
    </form>
  );
};

export default App;
