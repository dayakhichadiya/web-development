#include<iostream>
using namespace std;

int main(){

    int total=0;
    int n;

    // cout<<"enter number:"<<endl;
    // cin>>n;

    for(int i=1;i<=10;i++){
        
        if(i%2==0){
            total=total+i;
            cout<<total;
        }
        cout<<"\t";

    }
    return 0;
}