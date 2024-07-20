#include<iostream>
using namespace std;

int main(){

    int arr[20];
    int total=0;
    int sum=0;

    for(int i=0;i<=5;i++){
        cout<<"enter the value:"<<i<<endl;
        cin>>arr[i];
    }
    for(int i=0;i<=5;i++){
        if(i%2==0){
            total+=i;
            
        }
        else {
            sum+=i;
            

        }
        
    }
    cout<<"the even number total is"<<total<<endl;
        cout<<"the odd num total is:"<<sum<<endl;

    return 0;

}