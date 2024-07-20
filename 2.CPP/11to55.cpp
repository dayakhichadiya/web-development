#include<iostream>
using namespace std;

int main(){

    int k=11;
    for(int i=1;i<=5;i++){
        for(int j=1;j<=5;j++){
            cout<<k++<<"\t";
        }
        k+=5;
       cout<<endl;
     
        
    }
       
    return 0;
}