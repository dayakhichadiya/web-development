#include<iostream>
using namespace std;

class Unary{

    int x;
    int y;

    public:

    void getdata(int a, int b);
    void  showdata();
    void operator++(int);

};

void  Unary::getdata(int a, int b){
    x=a;
    y=b;
}
void  Unary::showdata(){
    cout<<x<<endl;
    cout<<y<<endl;
}
void Unary ::operator++(int) {
    x++;
    y++;
    x=-x;
    y=-y;
}

int main(){
    Unary c;
    c.getdata(6,7);
    c.showdata();
    c++;
    c.showdata();
    return 0;
}