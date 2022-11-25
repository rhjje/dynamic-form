import { useFormContext, useFieldArray } from 'react-hook-form';
import { StringItem } from 'components/string-item/string-item';
import { ValidationType } from 'types/types';
import { Button } from 'react-bootstrap';
import './array-item.css';

type ArrayItemProps = {
  description: string;
  name: string;
  rules?: ValidationType;
};

export const ArrayItem = ({ description, name, rules }: ArrayItemProps) => {
  const { watch } = useFormContext();

  const { fields, append, remove } = useFieldArray({ name });

  const lastField = watch(`${name}.${fields.length - 1}.value`);

  const maxCountFields = rules?.length?.max ?? Infinity;

  return (
    <fieldset className="array-field fieldset">
      <legend>{description}</legend>

      {fields.map((field, index) => {
        return (
          <div className="array-field__item" key={field.id}>
            <StringItem name={`${name}.${index}.value`} />
            {index > 0 && (
              <Button
                type="button"
                value="Remove"
                variant="outline-danger"
                onClick={() => remove(index)}
              >
                Remove
              </Button>
            )}
          </div>
        );
      })}

      {fields.length < maxCountFields && (
        <Button
          className="array-btn"
          type="button"
          value="Добавить"
          variant="success"
          onClick={() => append({ value: '' })}
          disabled={!lastField.length}
        >
          Добавить
        </Button>
      )}
    </fieldset>
  );
};
