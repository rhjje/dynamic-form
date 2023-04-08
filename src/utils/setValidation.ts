import Nope from 'nope-validator';
import {
  ObjectType,
  StringType,
  ArrayType,
  FieldEnum,
  SchemeType,
  DefaultValuesSchemeType,
  ValidationType,
} from 'types/types';

export const setValidationRules = (rules: ValidationType) => {
  let validator = Nope.string();

  if (rules.required) {
    validator = validator.required();
  }

  if (rules.length) {
    const { length } = rules;

    if (length.min) {
      validator = validator.min(length.min);
    }

    if (length.max) {
      validator = validator.max(length.max);
    }
  }

  if (rules.type === 'email') {
    validator = validator.email();
  }

  return validator;
};

export const setValidationScheme = (scheme: SchemeType) => {
  function setValidation(
    scheme: SchemeType,
    newScheme: DefaultValuesSchemeType,
  ) {
    for (const key in scheme) {
      if (Object.hasOwnProperty.call(scheme, key)) {
        if (
          (scheme[key].type === FieldEnum.String ||
            scheme[key].type === FieldEnum.Array) &&
          (scheme[key] as StringType | ArrayType).rules
        ) {
          newScheme[key] = setValidationRules(
            (scheme[key] as StringType | ArrayType).rules!,
          );
        }

        if (scheme[key].type === FieldEnum.Object) {
          newScheme[key] = setValidation((scheme[key] as ObjectType).items, {});
        }
      }
    }

    return Nope.object().shape(newScheme);
  }

  return setValidation(scheme, {});
};
