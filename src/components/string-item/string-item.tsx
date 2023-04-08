import React from 'react';
import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';
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

  return (
    <Form.Group className="string-item-wrapper">
      {description && (
        <Form.Label htmlFor={description} className="form-label">
          {description}
        </Form.Label>
      )}
      <Form.Control
        type="text"
        className={classNames('string-item', errors[name] && 'warning')}
        id={description}
        {...register(name)}
      />
    </Form.Group>
  );
};
