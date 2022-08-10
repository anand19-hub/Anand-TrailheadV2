public with sharing class AccountService {
    public Account createAccount(String accountName, String accountNumber, String tickerSymbol){
        Account acc = new Account();
        acc.Name = accountName;
        acc.AccountNumber = accountNumber;
        acc.TickerSymbol = tickerSymbol;
        System.debug('Account created ...' + acc);
        return acc;   
    }
}