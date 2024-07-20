#include<iostream>
using namespace std;

class Operator{

int a;
int b;
public:

void setdata(int x,int y){
    a=x;
    b=y;
}
void display(){
    cout<<"Value of a is "<<a<<endl;
    cout<<"Value of b is "<<b<<endl;
}                                                                                     

Operator operator*(Operator c){
    Operator d;
    d.a=a*c.a;
    d.b=b*c.b;
    return d;
}
};


int main() {
    Operator obj1,obj2,total;
    obj1.setdata(20,4);
    obj2.setdata(5,3);

    cout<<"first input is "<<endl;
    obj1.display();
    cout<<"second input is"<<endl;
    obj2.display();
    cout<<"the final output is :"<<endl;
    total = obj1 * obj2;
    total.display();
    return 0;
}