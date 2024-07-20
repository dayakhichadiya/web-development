#include<iostream>
using namespace std;

int main(){
    int k=65;
    for(int i=1;i<=5;i++){
        for(int j=1;j<=i;j++){
            cout<<char(k++)<<char (k+32);
        }
        cout<<endl;
    
    }
            


    
    
    return 0;


}