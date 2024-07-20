#include<iostream>
using namespace std;

class Rectangle{

    int  length;
    int breadth;
    int total;
    
    public:
    Rectangle(){
        cout<<"enter the lenght :"<<endl;
        cin>>length;
        cout<<"enter the breadth :"<<endl;
        cin>>breadth;
        total=length*breadth;
    }
    ~Rectangle() {
        cout<<"The area of rectangle is "<<total<<endl;
    }
};
int main(){
    Rectangle r1;
    return 0;
}