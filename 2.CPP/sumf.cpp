#include <iostream>
using namespace std;

class Sum
{
    int x;
    int y;

public:
    friend Sum storedata(Sum o1, Sum o2);
    void getdata(int a, int b);
    void printdata();
};
void Sum ::getdata(int a, int b)
{
    x = a;
    y = b;
}
void Sum ::printdata()
{
    cout << x << ":" << y << endl;
}
Sum storedata(Sum o1, Sum o2){
    Sum o3;
    o3.getdata((o1.x+o2.x),(o1.y+o2.y));
    return o3;

}
int main(){
    Sum c,c1,sum;
    c.getdata(10,5);
    c.printdata();
    c1.getdata(7,8);
    c.printdata();
    sum=storedata(c,c1);
    sum.printdata();
    return 0;
}