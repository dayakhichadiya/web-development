#include<iostream>
using namespace std;

class Base {
    public :
    int a,b;

    void data(){
        cout<<"enter the value of a :"<<endl;
        cin>>a;
        cout<<"enter the value of b :"<<endl;
        cin>>b;
    }

};

class derive1:public Base{
    public :
    void divide(){
        cout<<"the division is :"<<a/b<<endl;

    }
};

class  derive2:public Base{
    public :
    void sub(){
        cout<<"the subtraction is :"<<a-b<<endl;
    }
};
int main(){
    derive1 d1;
    derive2 d2;
    d1.data();
    d1.divide();
    d2.data();
    d2.sub();
return 0;
}