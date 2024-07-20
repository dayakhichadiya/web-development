#include<iostream>
using namespace std;

int main(){
    int k=97;

    for(int i=1;i<=5;i++){
        for(int j=1;j<=i;j++){
            cout<<char(k++)<<"\t";
        }
     
        cout<<endl;
    }




    return 0;

}