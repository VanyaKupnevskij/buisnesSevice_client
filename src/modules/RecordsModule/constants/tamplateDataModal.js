const tamplateDataModal = {
  id: { name: 'id', title: 'id', value: null, type: 'text', type_display: 'none' },
  date: { name: 'date', title: 'Дата', value: null, type: 'date', type_display: 'all' },
  money_account: {
    name: 'money_account',
    title: 'Рахунок',
    value: 'Не задано',
    type: 'select',
    type_display: 'all',
    options: [
      { key: 'ФОП', value: 'ФОП' },
      { key: 'Monobank', value: 'Monobank' },
      { key: 'Privatebank', value: 'Privatebank' },
      { key: 'Готівка', value: 'Готівка' },
      { key: 'Інше', value: 'Інше' },
      { key: null, value: 'Не задано' },
    ],
  },
  comment: {
    name: 'comment',
    title: 'Коментар',
    value: '',
    type: 'text',
    type_display: 'all',
    multiple: true,
  },
  source_from: {
    name: 'source_from',
    title: 'Джерело',
    value: 'Не задано',
    type: 'select',
    type_display: 'all',
    options: [
      { key: 'Реклама', value: 'Реклама' },
      { key: 'Тарегет', value: 'Тарегет' },
      { key: 'Зарплатня', value: 'Зарплатня' },
      { key: 'Підписка', value: 'Підписка' },
      { key: 'Інше', value: 'Інше' },
      { key: null, value: 'Не задано' },
    ],
  },
  income: {
    name: 'income',
    title: 'Прибуток',
    value: 0,
    type: 'number',
    type_display: 'all',
  },
  costs: {
    name: 'costs',
    title: 'Витрати',
    value: 0,
    type: 'number',
    type_display: 'all',
  },
  already_paid: {
    name: 'already_paid',
    title: 'Оплачено',
    value: 0,
    type: 'number',
    type_display: 'all',
  },
  worker_full_name: {
    name: 'worker_full_name',
    title: "Ім'я працівника",
    value: 'Не задано',
    type: 'select',
    type_display: 'all',
    options: [],
  },
  worker_money_account: {
    name: 'worker_money_account',
    title: 'Рахунок працівника',
    value: 'Не задано',
    type: 'select',
    type_display: 'readonly',
    options: [
      { key: 'ФОП', value: 'ФОП' },
      { key: 'Monobank', value: 'Monobank' },
      { key: 'Privatebank', value: 'Privatebank' },
      { key: 'Готівка', value: 'Готівка' },
      { key: 'Інше', value: 'Інше' },
      { key: null, value: 'Не задано' },
    ],
  },
  worker_realm: {
    name: 'worker_realm',
    title: 'Спеціалізація працівника',
    value: 'Не задано',
    type: 'select',
    type_display: 'readonly',
    options: [
      { key: 'Сео', value: 'Сео' },
      { key: 'Таргетолог', value: 'Таргетолог' },
      { key: 'Менеджер', value: 'Менеджер' },
      { key: 'Діректор', value: 'Діректор' },
      { key: 'Дизайнер', value: 'Дизайнер' },
      { key: 'Программіст', value: 'Программіст' },
      { key: 'Інше', value: 'Інше' },
      { key: null, value: 'Не задано' },
    ],
  },
  worker_salary: {
    name: 'worker_salary',
    title: 'Зарплатня працівника',
    value: null,
    type: 'number',
    type_display: 'readonly',
  },
};

export const titles = ['Дата', 'Рахунок', 'Джерело', 'Прибуток', 'Витрати', 'Оплачено'];

export default tamplateDataModal;
