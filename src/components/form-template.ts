export const FORM_TEMPLATE = {
  documentName: 'Прекрасный документ',
  items: {
    lastName: {
      type: 'string',
      description: 'Фамилия',
      rules: { required: true, length: { min: 3, max: 50 } },
    },
    name: {
      type: 'string',
      description: 'Имя',
      rules: { required: true, length: { min: 2, max: 50 } },
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
              rules: { required: true },
            },
            street: {
              type: 'string',
              description: 'Улица',
              rules: { required: true },
            },
            house: {
              type: 'string',
              description: 'Дом',
              rules: { required: true },
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
