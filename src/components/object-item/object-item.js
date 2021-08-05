import React from 'react';
import StringItem from '../string-item/string-item';
import ArrayItem from '../array-item/array-item';
import './object-item.css';

const ObjectItem = ({ items, description = '', register, formName, errors }) => {
  return (
    <div className="wrapper">
      {description ? <legend>{description}</legend> : null}
      {Object.keys(items).map((item) => {
        if (items[item].type === 'string') {
          return (
            <StringItem
              rules={items[item].rules}
              errors={errors}
              register={register}
              formName={`${formName}.${item}`}
              label={items[item].description}
              key={items[item].description}
            />
          );
        }
        if (items[item].type === 'array') {
          return (
            <ArrayItem
              register={register}
              formName={`${formName}.${item}`}
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
              formName={`${formName}.${item}`}
              items={items[item].items}
              description={items[item].description}
              key={items[item].description}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default ObjectItem;
