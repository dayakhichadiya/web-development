#include<iostream>
#include<string>
using namespace std;

int main(){
    char arr[10];
    int n,i,j;

    cout<<"enter the string:"<<endl;
    cin>>n;
    
    for(int i=0;arr[i]!='\0';i++);
        for(int j=i;j>=0;j--){
            cout<<char(arr[j]);

        }
  




    return 0;
}