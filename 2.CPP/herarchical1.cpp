#include<iostream>
using namespace std;

class Base{
    public  :
    int x ;
    int y;

    void setdata(){
        cout<<"enter the value of x :"<<endl;
        cin>>x;
        cout<<"enter the value of y :"<<endl;
        cin>>y;
    }
};

class Derive1:public Base {
    public :
    void sum(){
        cout<<"the sum is :"<<x+y<<endl;
    }
};

class  Derive2:public Base {
    public :
    void multi(){
        cout<<"the multipication is :"<<x*y<<endl;
    }
};

int main(){
    Derive1  d1;
    Derive2 d2;

    d1.setdata();
    d1.sum();

     d2.setdata();
    d2.multi();
    return 0;
}