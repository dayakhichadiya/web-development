#include<iostream>
using namespace std;

//single inheritance
class Base{
    public :
    int a=10;
    int b=20;
    void  showData() {
        cout<<"the value of a :"<<a<<endl;
        cout<<"the value of b :"<<b<<endl;
    }
};
class Derived:public Base{
    public :
    void sum(){
        cout<<"the sum is :"<<a+b<<endl;
    }
};

//multiple inheritance
class Main{
    public :
    int x;
    int y;
    void input(){
        cout << "enter the value of x :"<<endl;
        cin>>x;
        cout << "enter the value of y :"<<endl;
        cin>>y;
    }
};
class Sub : public Main{
    public :
    void sub (){
        cout<<"the subtraction is :"<<x-y<<endl;
    }
};
class Multi : public Main, public Derived{
    public :
    void multi(){
        cout<<"the multiplication is :"<<x*y<<endl;
    }
};
int main(){
    Derived d1;
    d1.showData();
    d1.sum();

    Multi m1;
    m1.input(); 
    m1.multi();
    
    Sub s1;
    s1.input();
    s1.sub();
    return 0;
}