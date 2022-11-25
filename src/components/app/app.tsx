import { useForm, FormProvider } from 'react-hook-form';
import { ObjectItem } from '../object-item/object-item';
import { FORM_TEMPLATE } from '../form-template';
import { OptionalType } from 'types/types';
import { setDefaultValues } from 'utils/setDefaultValues';
import { Button } from 'react-bootstrap';
import './app.css';

type FormSсheme = OptionalType<typeof FORM_TEMPLATE>;

export const App = () => {
  const methods = useForm<FormSсheme>({
    defaultValues: setDefaultValues(FORM_TEMPLATE.items),
  });
  const { handleSubmit } = methods;

  const { documentName, items } = FORM_TEMPLATE;

  const formattingData = (object: FormSсheme) => {
    const newObj: FormSсheme = JSON.parse(JSON.stringify(object));
    const getProp = (obj: any) => {
      for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
          if (Array.isArray(obj[key])) {
            const arr = obj[key].filter(Boolean);
            obj[key] = arr;
          }
          if (typeof obj[key] === 'object') {
            getProp(obj[key]);
          }
          if (obj[key] === '') {
            obj[key] = null;
          }
        }
      }
    };

    getProp(newObj);
    return newObj;
  };

  const onSubmitHandler = (value: FormSсheme) => {
    const formattingValue = formattingData(value);
    const postData = {
      documentName,
      items: formattingValue,
    };

    // eslint-disable-next-line no-console
    console.log(postData);
  };

  return (
    <FormProvider {...methods}>
      <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
        <legend>{documentName}</legend>
        <fieldset className="fieldset">
          <ObjectItem items={items} />
        </fieldset>
        <Button className="submit-btn" variant="success" type="submit">
          Отправить
        </Button>
      </form>
    </FormProvider>
  );
};
