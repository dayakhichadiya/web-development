#include<iostream>
using namespace std;

class A{
    protected :
    int  x;
};
class B : public A{
    public :
    void setdata(int a){
        x=a;
    }
    void display(){
        cout<<"the value of x is : "<<x<<endl;
    }
    
};
int main(){
    B obj;
    obj.setdata(10);
    obj.display();
    return 0;
}