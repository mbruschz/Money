export const MockedData = {
  id: 1,
  account: 'NuBank',
  currency: 'BRL',
  transactions: [{
    id: 1,
    label: 'red',
    reconciled: true,
    date: new Date(),
    category: 'Gastos:Gastos Teph Recebimentos',
    payee: 'Payee',
    ammount: -9999999.00,
    balance: 999999.00,
    currency: 'BRL',
    place: '@-25.3835805,-49.2927392,16z'
  },
  {
    id: 2,
    label: 'green',
    reconciled: false,
    date: new Date(),
    category: 'Gastos:Gastos Teph Recebimentos',
    payee: 'Payee',
    ammount: 9999999.00,
    balance: 999999.00,
    currency: 'BRL',
    place: '@-25.3835805,-49.2927392,16z'
  },
  {
    id: 3,
    label: 'blue',
    reconciled: false,
    date: new Date(),
    category: 'Gastos:Gastos Teph Recebimentos',
    payee: 'Payee',
    ammount: 999.00,
    balance: 100.00,
    currency: 'BRL',
    place: '@-25.3835805,-49.2927392,16z'
  }]
}