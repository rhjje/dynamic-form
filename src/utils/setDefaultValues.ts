import { StringType, ArrayType, ObjectType, FieldEnum } from 'types/types';

type SchemeType = Record<string, StringType | ArrayType | ObjectType>;

export const setDefaultValues = (scheme: SchemeType) => {
  function setValue(scheme: SchemeType, newScheme: Record<string, any>) {
    for (const key in scheme) {
      if (Object.hasOwnProperty.call(scheme, key)) {
        if (scheme[key].type === FieldEnum.String) {
          newScheme[key] = '';
        }

        if (scheme[key].type === FieldEnum.Array) {
          newScheme[key] = [{ value: '' }];
        }

        if (scheme[key].type === FieldEnum.Object) {
          newScheme[key] = setValue((scheme[key] as ObjectType).items, {});
        }
      }
    }

    return newScheme;
  }

  return setValue(scheme, {});
};
