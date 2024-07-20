#include<iostream>
using namespace std;

class Div{

    int x,y;

    public:

    friend Div storedata(Div o1,Div o2);
    void getdata(int a,int b);
    void printdata();

};

void  Div::getdata(int a,int b  ){
    x=a;
    y=b;
}
void  Div::printdata(){ 
    cout<<x<<":"<<y<<endl;  
}   
Div storedata(Div o1,Div o2){
    Div o3;

    o3.getdata((o1.x/o2.x),(o1.y/o2.y));
    return  o3;
}
int main(){
    Div d,d1,d2;

    d.getdata(10,8);  
    d.printdata();
    d1.getdata(5,2);
    d1.printdata();
    d2=storedata(d,d1);
    d2.printdata();
    
    return 0;
}