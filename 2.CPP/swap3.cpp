#include<iostream>
using namespace std;

int main(){
    int a,b,c;

    cout<<"enter a"<<endl;
    cin>>a;
    cout<<"enter b"<<endl;
    cin>>b;

    c=a;
    a=b;
    b=c;

    cout<<"a is"<<a<<endl;
    cout<<"b is"<<b;


    return 0;
}