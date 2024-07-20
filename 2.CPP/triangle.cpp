#include<iostream>
using namespace std;

int main(){

    int upper=0;
    int diagnol=0;
    int lower=0;
    int arr[3][3]={{1,2,3},{4,5,6},{7,8,9}};

    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            cout<<arr[i][j];
        }
        cout<<endl;
    }
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            if(i>j){
                upper+=arr[i][j];
            }
            else if(i<j){
                lower+=arr[i][j];
            }
            else{
                diagnol+=arr[i][j];
            }
        }
        }
        cout<<"the upper total is:"<<upper<<endl;
        cout<<"the lower total is:"<<lower<<endl;
        cout<<"the diagnol total is:"<<diagnol<<endl;
    return 0;

}