#include<iostream>
using namespace std;

class Employe{
    int id;
    static int count;

    public :
    void getdata(){
        cout<<"Enter  Employee ID: "<<endl;
        cin>>id;
        count++;
    }
    void printdata(){
        cout<<"employe id is :"<<id<<endl;
    }
    static void  displayCount() {
        cout<<"Employe count is :"<<count<<endl;
     }
};

int  Employe::count = 30;

int main(){
    Employe raju,om,neha;

    raju.getdata();
    raju.printdata();
    raju.displayCount();

    om.getdata();
    om.printdata();
    om.displayCount();

    neha.getdata();
    neha.printdata();
    neha.displayCount();
    
return 0;

}