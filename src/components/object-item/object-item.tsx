import React from 'react';
// import ArrayItem from '../array-item/array-item';
import { StringType, ArrayType, ObjectType, FieldEnum } from 'types/types';
import { StringItem } from '../string-item/string-item';
import './object-item.css';

interface ObjectItemProps {
  items: Record<string, StringType | ArrayType | ObjectType>;
  description?: string;
  name?: string;
}

export const ObjectItem = ({ items, description, name }: ObjectItemProps) => {
  return (
    <div className={description ? 'wrapper' : 'form-container'}>
      {description && <legend>{description}</legend>}
      {Object.keys(items).map((keyOfItems) => {
        if (items[keyOfItems].type === FieldEnum.String) {
          return (
            <StringItem
              description={items[keyOfItems].description}
              name={description ? `${name}.${keyOfItems}` : keyOfItems}
              key={description ? `${name}.${keyOfItems}` : keyOfItems}
            />
          );
        }
        // if (items[item].type === 'array') {
        //   return (
        //     <ArrayItem
        //       description={items[item].description}
        //       register={register}
        //       formName={description ? `${formName}.${item}` : item}
        //       errors={errors}
        //       rules={items[item].rules}
        //       items={items[item].items.rules}
        //       key={items[item].description}
        //     />
        //   );
        // }
        // if (items[item].type === 'object') {
        //   return (
        //     <ObjectItem
        //       description={items[item].description}
        //       register={register}
        //       formName={description ? `${formName}.${item}` : item}
        //       errors={errors}
        //       items={items[item].items}
        //       key={items[item].description}
        //     />
        //   );
        // }
        return null;
      })}
    </div>
  );
};
