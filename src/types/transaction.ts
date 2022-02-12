export default interface Transaction {
  id: number,
  label: string,
  reconciled: boolean,
  date: Date,
  category: string,
  payee: string,
  ammount: number,
  balance: number,
  currency: string,
  place: string,
}