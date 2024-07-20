#include<iostream>
using namespace std;

int main(){

    int arr[5];

    for(int i=0;i<=4;i++){
        cout<<"enter the element :"<<i<<"\t";
        cin>>arr[i];
    }

    for(int i=0;i<=4;i++){
        cout<<"the position is"<<i<<"of element:"<<arr[i]<<endl;

    }






    return 0;
}