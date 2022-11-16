import React from 'react';
import classNames from 'classnames';
import { get } from 'lodash';
import { useFormContext } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import './string-item.css';

type StringItemProps = {
  description: string;
  name: string;
};

export const StringItem = ({ description, name }: StringItemProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Form.Group>
      <Form.Label htmlFor={description} className="form-label">
        {description}
      </Form.Label>
      <Form.Control
        type="text"
        className={classNames('form-control', errors[name] && 'warning')}
        id={description}
        {...register(name)}
      />
      {get(errors, name) && <p>{get({}, name).message}</p>}
    </Form.Group>
  );
};
