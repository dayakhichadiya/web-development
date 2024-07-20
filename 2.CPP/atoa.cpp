#include<iostream>
using namespace std;

int main(){

int k=65;
    for(int i=1;i<=5;i++){
        for(int j=i;j>=1;j--){
            cout<<char(k+j-1);
           
        }
        // k++;
        cout<<endl;
    }






    return 0;
}