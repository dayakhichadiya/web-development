#include<iostream>
using  namespace std;

class Base{
    public:
    int a=10;
    virtual void print()=0;
};

class  Derived :public Base {
    public :
    int b=20;
    void print(){
        cout<<"a = " << a <<endl;
        cout<<"b = " <<b <<endl;

    }
};
int main(){
    Base * base_obj_poi;
    Derived d_obj;

    base_obj_poi =&d_obj;
    base_obj_poi -> print();
    
    return 0;
}