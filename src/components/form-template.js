const FORM_TEMPLATE = {
  DocumentName: 'Прекрасный документ',
  items: {
    Name: {
      type: 'string',
      description: 'Имя'
    },
    LastName: {
      type: 'string',
      description: 'Фамилия',
      rules: {
        required: true,
        sizes: {
          min: 5,
          max: 10
        }
      }
    },
    Patronymic: {
      type: 'string',
      description: 'Отчество'
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
              rules: {
                required: true,
                sizes: {
                  min: 5,
                  max: 10
                }
              }
            },
            Street: {
              type: 'string',
              description: 'Улица'
            },
            House: {
              type: 'string',
              description: 'Дом'
            }
          }
        },
        Phones: {
          type: 'array',
          description: 'Телефоны',
          items: {
            type: 'string'
          }
        }
      }
    }
  }
};

export default FORM_TEMPLATE;
