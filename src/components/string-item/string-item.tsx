import React from 'react';
import classNames from 'classnames';
import { useFormContext, get } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import './string-item.css';

type StringItemProps = {
  name: string;
  description?: string;
};

export const StringItem = ({ name, description }: StringItemProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, name);

  return (
    <Form.Group className="string-item-wrapper">
      {description && (
        <Form.Label htmlFor={description} className="form-label">
          {description}
        </Form.Label>
      )}
      <Form.Control
        type="text"
        className={classNames('string-item', error && 'warning')}
        id={description}
        {...register(name)}
      />
      {error && <span className="error">{error?.message}</span>}
    </Form.Group>
  );
};
