#include<iostream>

using namespace std;
int main(){

    int a,b;


    cout<<"enter a"<<endl;
    cin>>a;
    cout<<"enter b"<<endl;
    cin>>b;

    b=b+a;
    a=b-a;
    b=b-a;

    cout<<a<<b<<endl;

    return 0;
}