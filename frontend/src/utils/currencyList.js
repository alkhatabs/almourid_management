const currencyFlag = [
  { currency_code: 'OMR', flag: '🇴🇲' },
  { currency_code: 'USD', flag: '🇺🇸' },
  { currency_code: 'EUR', flag: '🇪🇺' },



];

export const currencyOptions = (currencyList) => {
  return currencyList.map((x) => {
    return {
      value: x.currency_code,
      label:
        (currencyFlag.find((currency) => currency.currency_code === x.currency_code)?.flag ||
          '💵') +
        ' ' +
        x.currency_symbol +
        ' (' +
        x.currency_name +
        ')',
    };
  });
};
