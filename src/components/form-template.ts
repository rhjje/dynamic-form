export const FORM_TEMPLATE = {
  documentName: 'Прекрасный документ',
  items: {
    lastName: {
      type: 'string',
      description: 'Фамилия',
      rules: { required: true, length: { min: 2, max: 50 } },
    },
    name: {
      type: 'string',
      description: 'Имя',
    },
    patronymic: {
      type: 'string',
      description: 'Отчество',
    },
    contacts: {
      type: 'object',
      description: 'Контактные данные',
      items: {
        address: {
          type: 'object',
          description: 'Адрес',
          items: {
            city: {
              type: 'string',
              description: 'Город',
            },
            street: {
              type: 'string',
              description: 'Улица',
            },
            house: {
              type: 'string',
              description: 'Дом',
            },
          },
        },
        phones: {
          type: 'array',
          description: 'Телефоны',
        },
      },
    },
  },
};
