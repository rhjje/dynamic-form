export const FORM_TEMPLATE = {
  documentName: 'Document',
  items: {
    surname: {
      type: 'string',
      description: 'Surname',
      rules: { required: true, length: { min: 3, max: 50 } },
    },
    name: {
      type: 'string',
      description: 'Name',
      rules: { required: true, length: { min: 2, max: 50 } },
    },
    patronymic: {
      type: 'string',
      description: 'Patronymic',
    },
    contacts: {
      type: 'object',
      description: 'Contacts',
      items: {
        address: {
          type: 'object',
          description: 'Address',
          items: {
            city: {
              type: 'string',
              description: 'City',
              rules: { required: true },
            },
            street: {
              type: 'string',
              description: 'Street',
              rules: { required: true },
            },
            house: {
              type: 'string',
              description: 'House',
              rules: { required: true },
            },
          },
        },
        phones: {
          type: 'array',
          description: 'Phones',
        },
      },
    },
  },
};
