#include<iostream>
using namespace std;

class base{
    int a=10;
    int b=20;
    
    public:

    int c=30;

    void printdata(){
        cout<<a<<endl;
        cout<<b<<endl;

    }
};
class  derived :public base {
    public :

    int d=50;
};
int main(){
    derived  obj;
    cout<<obj.c<<endl;
    cout<<obj.d<<endl;
    obj.printdata();
    return 0;

}