@IsTest
private class AccountServiceTest {
    @IsTest
    private static void Test_CreateAccount() {
        String accName = 'SF';
        String accNumber = 'SFDC12345';
        String tickerSymbol = 'CRM';
        Test.startTest();
            AccountService service = new AccountService();
            Account newAcc = service.createAccount(accName, accNumber, tickerSymbol);
            insert newAcc;
        Test.stopTest();
        
        List<Account> listOfAccounts = [SELECT Id, Name, AccountNumber, TickerSymbol FROM Account WHERE Id = :newAcc.Id];
        System.assertEquals(1, listOfAccounts.size(), 'should have an one account');
        System.assertEquals(accName, listOfAccounts[0].Name);
        System.debug('result is' + listOfAccounts[0].Name);
        System.assertEquals(accNumber, listOfAccounts[0].AccountNumber);
        System.assertEquals(accName, listOfAccounts[0].TickerSymbol);
    }
}