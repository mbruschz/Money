import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { useTheme } from 'styled-components'
import { getFormattedDateForUsers } from '../../services/utils/date';
import { formatCurrency } from '../../services/utils/numbers';
import LabelColor from '../../static/labelColors';
import Account from '../../types/account';
import FilterParams from '../../types/filter_params';
import { getAccount } from '../../services/api/account.api'
import { emptyAcc, generateTestId } from './data';
import { Wrapper,
  Transactions,
  Transaction,
  Reconcile, 
  Label,
  Category,
  Date,
  Payee,
  Ammount,
  Balance
} from './style'

interface ContentProps {
  dataTestid: string
}
export function Content({ dataTestid }: ContentProps) {
  const theme = useTheme();
  const { accountId } = useParams<{ accountId: string }>();
  const testId = generateTestId(dataTestid)

  const [ account, setAccount] = useState<Account>(emptyAcc)

  const listAccount = useCallback(async (payload: FilterParams) => {
    const { response, error } = await getAccount(payload);
    
    if (error){
      const isError = true;
      setAccount(emptyAcc);
      return;
    }
    if (response!.data) {
      setAccount(response!.data)
    };
  }, []);

  const handleLineClick = (id: number) => alert(`teste ${id}`) 

  useEffect (() => {
    listAccount({accountId: accountId || 0 })
  }, [])

  return (
    <Wrapper data-testid={testId.component}>
      <Transactions data-testid={testId.transactions}>
        <h1>Header</h1>
      
      { account?.transactions?.map( (t) => (
        <Transaction data-testid={testId.transaction} key={t.id} lineColor={(t.id % 2 == 0) ? theme.colors.contentLineOdd : theme.colors.contentLineEven}
        onClick={() => handleLineClick(t.id)}>
          <Label colors={LabelColor[t.label]}/>
          <Reconcile type="checkbox"/>
          <Date>{getFormattedDateForUsers(t.date)}</Date>
          <Category>{t.category}</Category>
          <Payee>{t.payee}</Payee>
          <Ammount style={{color:(t.ammount < 0) ? theme.colors.ammountNegative:theme.colors.ammountPositive}}>
            {formatCurrency(t.ammount, t.currency)}
          </Ammount>
          <Balance>{formatCurrency(t.balance, account?.currency)}</Balance>
        </Transaction>
        )
      )}
      </Transactions>
    </Wrapper>
  )
}
