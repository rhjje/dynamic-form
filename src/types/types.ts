export type OptionalType<T> = {
  [K in keyof T]: T[K];
};

export enum FieldEnum {
  String = 'string',
  Array = 'array',
  Object = 'object',
}

export type ValidationType = {
  required?: boolean;
  length?: {
    min?: number;
    max?: number;
  };
  type?: 'text' | 'number';
};

export type StringType = {
  type: string;
  description: string;
  rules?: ValidationType;
};

export type ArrayType = {
  type: string;
  description: string;
  rules?: ValidationType;
};

export type ObjectType = {
  type: string;
  description: string;
  items: Record<string, StringType | ArrayType>;
};
