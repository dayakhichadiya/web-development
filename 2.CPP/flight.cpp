#include <iostream>
using namespace std;

class Flight
{
    int flightno;
    char destination[50];
    float distance;
    float fuel;
    float calfuel(float fuel);

public:
    void feedinfo()
    {
        cout << "enter flight number:" << endl;
        cin >> flightno;
        cout << "Enter Destination: " << endl;
        cin >> destination;
        cout << "Enter Distance: " << endl;
        cin >> distance;
        
    }
    float calfuel(){
        if (distance <= 1000)
        {
            return 500;
        }
        else if (distance > 1000 || distance <= 2000)
        {
            return 1100;
        }
        else
        {
            return 2200;
        }

    }
    void showinfo(){
        cout<<"Flight Number : "<<flightno<<endl;
        cout<<"Destination : "<<destination<<endl;
        cout<<"Distance : "<<distance<<endl ;
        cout<<"Fuel Required : "<<calfuel();
    }
};
 
int main()
{
    Flight f1;
    f1.feedinfo();
    f1.calfuel();
    f1.showinfo();
    
}