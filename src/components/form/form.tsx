import { useForm, FormProvider } from 'react-hook-form';
import { nopeResolver } from '@hookform/resolvers/nope';
import { ObjectItem } from '../object-item/object-item';
import { FORM_TEMPLATE } from '../form-template';
import { mapFieldsForApi } from 'utils/mapFieldsForApi';
import { DefaultValuesSchemeType } from 'types/types';
import { setDefaultValues } from 'utils/setDefaultValues';
import { setValidationScheme } from 'utils/setValidation';
import { Button } from 'react-bootstrap';
import './form.css';

export const Form = () => {
  const methods = useForm<DefaultValuesSchemeType>({
    defaultValues: setDefaultValues(FORM_TEMPLATE.items),
    resolver: nopeResolver(setValidationScheme(FORM_TEMPLATE.items)),
  });

  const { handleSubmit } = methods;

  const { documentName, items } = FORM_TEMPLATE;

  const onSubmitHandler = (value: DefaultValuesSchemeType) => {
    const data = {
      documentName,
      items: mapFieldsForApi(value),
    };

    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
        <legend>{documentName}</legend>
        <fieldset className="fieldset">
          <ObjectItem items={items} />
        </fieldset>
        <Button className="submit-btn" variant="success" type="submit">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};
