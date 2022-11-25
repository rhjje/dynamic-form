import React from 'react';
import { ArrayItem } from 'components/array-item/array-item';
import { StringType, ArrayType, ObjectType, FieldEnum } from 'types/types';
import { StringItem } from '../string-item/string-item';
import './object-item.css';

interface ObjectItemProps {
  items: Record<string, StringType | ArrayType | ObjectType>;
  description?: string;
  name?: string;
}

export const ObjectItem = ({ items, description, name }: ObjectItemProps) => {
  const Wrapper = description ? 'fieldset' : React.Fragment;

  return (
    <Wrapper className={description && 'object-item fieldset'}>
      {description && <legend>{description}</legend>}

      {Object.keys(items).map((keyOfItems) => {
        const fieldName = description ? `${name}.${keyOfItems}` : keyOfItems;

        if (items[keyOfItems].type === FieldEnum.String) {
          return (
            <StringItem
              description={items[keyOfItems].description}
              name={fieldName}
              key={fieldName}
            />
          );
        }

        if (items[keyOfItems].type === 'array') {
          return (
            <ArrayItem
              description={items[keyOfItems].description}
              name={fieldName}
              rules={(items[keyOfItems] as ArrayType).rules}
              key={fieldName}
            />
          );
        }

        if (items[keyOfItems].type === FieldEnum.Object) {
          return (
            <ObjectItem
              items={(items[keyOfItems] as ObjectType).items}
              description={items[keyOfItems].description}
              name={fieldName}
              key={fieldName}
            />
          );
        }

        return null;
      })}
    </Wrapper>
  );
};
