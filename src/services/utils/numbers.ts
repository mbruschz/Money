import { ptBR } from 'date-fns/locale';

export const addThousandSeparator = (value: number, decimalCases = 2): string => {
  return value.toFixed(decimalCases)
  .replace('.',',')
  .replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1.')
}

export const formatCurrency = (value: number, currency = 'BRL'): string => {
  return new Intl.NumberFormat(ptBR.code, { style: 'currency', currency: currency }).format(value);
}