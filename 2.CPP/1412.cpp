#include<iostream>
using namespace std;

int main(){
    
    int k=2;
    for(int i=1;i<=10;i++){
        if(i==1){
            cout<<i;
        }
        else{
            cout<<i*k;
            k*=2;
        }
        cout<<"\t";
    }
        
    return 0;
}