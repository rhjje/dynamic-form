import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ObjectItem from '../object-item/object-item';
import './app.css';
import FORM_TEMPLATE from '../form-template';

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // eslint-disable-next-line no-unused-vars
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
      items: formattingValue,
    };

    // eslint-disable-next-line no-console
    console.log(postData);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
      <legend>{DocumentName}</legend>
      <ObjectItem items={items} register={register} errors={errors} />
      <input type="submit" value="Отправить" className="btn btn-success" />
    </form>
  );
};

export default App;
