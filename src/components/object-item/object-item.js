import React from 'react';
import ArrayItem from '../array-item/array-item';
import StringItem from '../string-item/string-item';
import './object-item.css';

const ObjectItem = ({ description, register, formName, errors, items }) => {
  return (
    <div className={description ? 'wrapper' : 'form-container'}>
      {description ? <legend>{description}</legend> : null}
      {Object.keys(items).map((item) => {
        if (items[item].type === 'string') {
          return (
            <StringItem
              description={items[item].description}
              register={register}
              formName={description ? `${formName}.${item}` : item}
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
              formName={description ? `${formName}.${item}` : item}
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
              formName={description ? `${formName}.${item}` : item}
              errors={errors}
              items={items[item].items}
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
