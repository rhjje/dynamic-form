const FORM_TEMPLATE = {
  DocumentName: 'Прекрасный документ',
  items: {
    LastName: {
      type: 'string',
      description: 'Фамилия',
    },
    Name: {
      type: 'string',
      description: 'Имя',
    },
    Patronymic: {
      type: 'string',
      description: 'Отчество',
    },
    Contacts: {
      type: 'object',
      description: 'Контактные данные',
      items: {
        Address: {
          type: 'object',
          description: 'Адрес',
          items: {
            City: {
              type: 'string',
              description: 'Город',
            },
            Street: {
              type: 'string',
              description: 'Улица',
            },
            House: {
              type: 'string',
              description: 'Дом',
            },
          },
        },
        Phones: {
          type: 'array',
          description: 'Телефоны',
          items: {
            type: 'string',
          },
        },
      },
    },
  },
};

export default FORM_TEMPLATE;
