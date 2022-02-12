import styled from 'styled-components'
import LabelCicles from '../../types/labelCicle'

interface WrapperProps {}
export const Wrapper = styled.div<WrapperProps>`
  padding: 2px;
  border: black;
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  max-width: 1000px;
`

interface TransactionsProps {

}
export const Transactions = styled.div<TransactionsProps>`
  
`

interface TransactionProps {
  lineColor: string;
}
export const Transaction = styled.div<TransactionProps>`
  display: flex;
  max-width: 1000px;
  background-color: ${(props: TransactionProps) => props.lineColor};
  nth-child(even) {background: #FFF}
  height: 1.25rem;
  align-items: center;
`
interface LabelProps {
  colors: LabelCicles,
}
export const Label = styled.div<LabelProps>`
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 0px 1px 0px 3px ;
  border-radius: 50%;
  position: relative;
  background: radial-gradient(circle at 50% 120%, ${(props: LabelProps) => props.colors.color1}, 
  ${(props: LabelProps) => props.colors.color2} 10%, 
  ${(props: LabelProps) => props.colors.color3} 80%, 
  ${(props: LabelProps) => props.colors.color4} 100%);

  :before {
    content: "";
    position: absolute;
    top: 1%;
    left: 5%;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 0px, #ffffff, rgba(255, 255, 255, 0) 58%);
    filter: blur(5px);
    z-index: 2;
  }
`
interface ReconcileProps {}
export const Reconcile = styled.input<ReconcileProps>`
  margin: 0px 1px 0px 3px ;
  width: 0.938rem;
`

interface DateProps {}
export const Date = styled.div<DateProps>`
  margin: 0px 4px 0px 0px ;
  min-width: 5.25rem;
  max-width: 6.25rem;
  text-align: center
`

interface CategoryProps {}
export const Category = styled.div<CategoryProps>`
  flex: auto;
`

interface PayeeProps {}
export const Payee = styled.div<PayeeProps>`
  flex: 1rem;
`
interface AmmountProps {}
export const Ammount = styled.div<AmmountProps>`
  min-width: 8.125rem;
  text-align: right;
  padding-right: 0.125rem;
`

interface BalanceProps {}
export const Balance = styled.div<BalanceProps>`
  min-width: 8.125rem;
  text-align: right;
  padding-right: 0.125rem;
`

