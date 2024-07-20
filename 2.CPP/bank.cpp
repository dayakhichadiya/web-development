#include <iostream>
#include <string>

using namespace std;

 
double rate=3.0;

struct Customer {
    int accountNumber;
    string name;
    double balance;
    double loan;
};


 struct Customer cus;


void createAccount() {
    
        cout << "Enter customer name: ";
        cin >> cus.name;
        cout<<"Enter account number : ";
        cin>>cus.accountNumber;
    
    cus.balance = 0;
        cus.loan = 0;
       
        cout << "Account created successfully!  "<<endl; 

}


void deposit() {
    int accountNumber;
    double amount;
    cout << "Enter account number: ";
    cin >> accountNumber;
     if (cus.accountNumber == accountNumber) {
            cout << "Enter amount to deposit: ";
            cin >> amount;
            cus.balance += amount;
            cout << "Deposit successful. New balance: " << cus.balance << endl;
            return;
     }else{
    cout << "Customer not found!" << endl;
     }
}


void withdraw() {
    int accountNumber;
    double amount;
    cout << "Enter account number: ";
    cin >> accountNumber;
        if (cus.accountNumber == accountNumber) {
            cout << "Enter amount to withdraw: ";
            cin >> amount;
            if (amount <= cus.balance) {
                cus.balance -= amount;
                cout << "Withdrawal successful. New balance: " << cus.balance << endl;
            } }else {
                cout << "Insufficient balance!" << endl;
            }
            return;
        
    cout << "Customer not found!" << endl;
}


void takeLoan() {
    int accountNumber;
    float amount;
    cout << "Enter account number: ";
    cin >> accountNumber;
    
        if (cus.accountNumber == accountNumber) {
        
            cout <<"interest rate is 3.0 "<<endl;
            cout << "Enter loan amount: ";
            cin >> amount;
            cus.loan += amount;
           
            float interest = 0;
            if (amount <=50000){
                interest += (amount*rate*0.5)/100;
            }
            else if (amount > 50000){
                interest +=(amount*rate*1)/100;
            }
            else if (amount >=1500000 ){
                interest +=(amount*rate*3)/100;
            }
            else{
                cout<<"";
            }
            cus.loan += interest;
            cout << "Loan taken successfully."<<endl;
            cout<<" Total loan amount (including interest): " << cus.loan << endl;
            return;
        
    }
    cout << "Customer not found!" << endl;
}

void displayInfo() {
    int accountNumber;
    cout << "Enter account number: ";
    cin >> accountNumber;
        if (cus.accountNumber == accountNumber) {
            cout << "Account Number: " << cus.accountNumber << endl;
            cout << "Name: " << cus.name << endl;
            cout << "Balance: " << cus.balance << endl;
            cout << "Loan with interest : " << cus.loan << endl;
            return;
        }
    
    cout << "Customer not found!" << endl;
}

int main() {
    int choice;
    do {
        cout << "\nBank Management System" << endl;
        cout << "1. Create Account" << endl;
        cout << "2. Deposit" << endl;
        cout << "3. Withdraw" << endl;
        cout << "4. Take Loan" << endl;
        cout << "5. Display Information" << endl;
        cout << "6. Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                createAccount();
                break;
            case 2:
                deposit();
                break;
            case 3:
                withdraw();
                break;
            case 4:
                takeLoan();
                break;
            case 5:
                displayInfo();
                break;
            case 6:
                cout << "Exiting program. Thank you!" << endl;
                break;
            default:
                cout << "Invalid choice. Please try again." << endl;
        }
    } while (choice != 6);

    return 0;
}