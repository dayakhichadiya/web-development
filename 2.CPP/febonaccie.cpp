#include<iostream>
using namespace std;

int feb(int n){

    if(n==0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
    else{
        return(feb(n-1)+feb(n-2));
    }
}
int main(){

    int n;

    cout<<"enter a number:"<<endl;
    cin>>n;
    for(int i=0;i<=n;i++){
        cout<<feb(i);
    }


    return 0;

}
