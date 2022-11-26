import { DefaultValuesSchemeType } from 'types/types';

export const mapFieldsForApi = (scheme: DefaultValuesSchemeType) => {
  function setValue(
    scheme: DefaultValuesSchemeType,
    newScheme: DefaultValuesSchemeType,
  ) {
    for (const key in scheme) {
      if (Object.hasOwnProperty.call(scheme, key)) {
        if (!scheme[key]) {
          newScheme[key] = null;
        } else if (Array.isArray(scheme[key])) {
          const arr = (scheme[key] as Array<Record<string, string>>)
            .map((item) => item.value)
            .filter(Boolean);
          newScheme[key] = arr;
        } else if (typeof scheme[key] === 'object') {
          newScheme[key] = setValue(scheme[key], {});
        } else {
          newScheme[key] = scheme[key];
        }
      }
    }

    return newScheme;
  }

  return setValue(scheme, {});
};
