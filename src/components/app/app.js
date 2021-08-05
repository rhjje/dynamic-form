import React, { useState } from 'react';
import ObjectItem from '../object-item/object-item';
import ArrayItem from '../array-item/array-item';
import StringItem from '../string-item/string-item';
import './app.css';

import FORM_TEMPLATE from '../form-template';

const App = () => {
  const [data, setData] = useState(FORM_TEMPLATE);
  const { DocumentName, items } = data;

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <legend>{DocumentName}</legend>
      {Object.keys(items).map((item) => {
        if (items[item].type === 'string') {
          return (<StringItem label={items[item].description} key={items[item].description} />);
        }
        if (items[item].type === 'array') {
          return (
            <ArrayItem
              items={items[item].items}
              description={items[item].description}
              key={items[item].description}
            />
          );
        }
        if (items[item].type === 'object') {
          return (
            <ObjectItem
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
