#include <iostream>
using namespace std;

struct Hotel {
    int id;
    string name;
    int price;
};

Hotel menu[5] = {
    {1, "Pizza", 259},
    {2, "Burger", 59},
    {3, "Fries", 79},
    {4, "Momos", 69},
    {5, "Biryani", 120}
};

struct Order {
    int id;
    int meal;
    int total;
};

Order orders[10];
int numOrders = 0;
int totalBill = 0;

void displayMenu() {
    cout << "--------------------- Menu -----------" << endl;
    cout << "  Items                          price" << endl;
    cout << "------------------------------------" << endl;
    for (int i = 0; i < 5; i++) {
        cout << menu[i].id << ". " << menu[i].name << "                         " << menu[i].price << endl;
    }
    cout << "--------------------------------------------" << endl;
}

void takeOrder() {

    int orderNum;
    int meal;
    cout << "--------------------- select your order ---------------------" << endl;
    cout << "Enter your order number: ";
    cin >> orderNum;
    cout << "Enter the number of meals: ";
    cin >> meal;

    for (int i = 0; i < 5; i++) {
        if (menu[i].id == orderNum) {
            orders[numOrders].id = orderNum;
            orders[numOrders].meal = meal;
            orders[numOrders].total = menu[i].price * meal;
            totalBill += orders[numOrders].total;
            // cout << "You ordered " << menu[i].name << " x " << meal << " = " << orders[numOrders].total << endl;
            numOrders++;
            break;
        }
    }
}

void displayBill() {
    cout << "--------------------- here is your bill ---------------------" << endl;
    cout << "Order Number     Meals           Price        Total" << endl;
    for (int i = 0; i < numOrders; i++) {
        cout << orders[i].id << "\t\t" << orders[i].meal << "\t\t" << menu[orders[i].id - 1].price << "\t\t" << orders[i].total << endl;
    }
    float gstAmount = totalBill * 0.18;
    cout << "GST (18%): " << gstAmount << endl;
    float GST = totalBill + gstAmount;
    cout << "Total Bill with GST: " << GST << endl;
}
int main() {
    int user;
    while (true) {
        cout << "------0--------------------------------------" << endl;
        cout << "For menu press 1" << endl;
        cout << "For order press 2" << endl;
        cout << "For bill press 3" << endl;
        cout << "For exit press 0" << endl;
        cout << "--------------------------------------------" << endl;
        cin >> user;

        switch (user) {
            case 1:
                displayMenu();
                break;

            case 2:
                takeOrder();
                break;

            case 3:
                displayBill();
                break;

            case 0:
                cout << "thank you for dining with us!!" << endl;
                return 0;

            default:
                cout << "Invalid input. Please try again." << endl;
        }
    }
}