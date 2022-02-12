import Transaction from './transaction';

export default interface Account {
  id: number,
  account: string,
  currency: string,
  transactions?: Transaction[],
}