#include<iostream>
using namespace std;

void sum(){
    cout<<3.14*4*4<<endl;

}
void sum(int sq){
    cout<<sq*sq<<endl;
}
void sum(int width,int length){
    cout<<width*length<<endl;
}
void sum(int height,int base, int div){
    cout<<height*base/div<<endl;
}


int main() {
    cout<<"The area of a circle is: "<<endl;
    sum();
    sum(5); 
    sum(2,6);
    sum(4,6,2);
    return 0;
}