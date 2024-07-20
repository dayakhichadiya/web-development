#include<iostream>
using namespace std;

class Sub{
    int x;
    int y;

    public:
    
    friend Sub storedata(Sub o1,Sub o2);
    void getdata(int  a,int b);
    void printdata();
};

void Sub :: getdata(int a,int b){
    x=a;
    y=b;
}
void  Sub::printdata(){
    cout<<x<<":"<<y<<endl;
}  
Sub storedata(Sub o1 , Sub o2){
    Sub o3;
    o3.getdata((o1.x-o2.x),(o1.y-o2.y));
    return o3;

}
int main() {
    Sub c,c1,sub;

    c.getdata(7,9);
    c.printdata();  
    c1.getdata(5,8);
    c1.printdata();
    sub=storedata(c,c1);
    sub.printdata();
    return 0;
}