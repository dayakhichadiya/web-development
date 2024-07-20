#include<iostream>
using namespace std;

class Unary{

    int x;
    int y;

    public:

    void getdata(int a, int b);
    void  showdata();
    void operator--();

};

void  Unary::getdata(int a, int b){
    x=a;
    y=b;
}
void  Unary::showdata(){
    cout<<x<<endl;
    cout<<y<<endl;
}
void Unary ::operator--() {
    --x;
    ++y;
}

int main(){
    Unary c;
    c.getdata(5,8);
    c.showdata();
    --c;
    c.showdata();
    return 0;
}