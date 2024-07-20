#include<iostream>
using namespace std;

class Multiply{
    int x;
    int y;

    public:

    friend Multiply storedata(Multiply o1,Multiply o2);
    void getdata(int a,int b);
    void printdata();
};
void Multiply :: getdata(int a,int b){
    x=a;
    y=b;
}
void Multiply ::  printdata(){
    cout<<x<<":"<<y<<endl;
}
Multiply storedata(Multiply o1 , Multiply o2) {
    Multiply o3;
    o3.getdata((o1.x*o2.x),(o1.y*o2.y));
    return o3;
}
int main(){
    Multiply  m1,m2,multi;

    m1.getdata(5,7);
    m1.printdata();

    m2.getdata(8,9);
    m2.printdata();

    multi=storedata(m1,m2);
    multi.printdata();
    return 0;
}
