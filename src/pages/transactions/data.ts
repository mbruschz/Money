import Account from '../../types/account';

export const generateTestId = (dataTestId: string) => ({
  component: dataTestId,
  transactions: `${dataTestId}-transactions`,
  transaction: `${dataTestId}-transaction`,
})

export const emptyAcc = {
  id: 0,
  account: '',
  currency: '',
  transactions: []
} as Account
