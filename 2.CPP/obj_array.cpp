#include<iostream>
using namespace std;

class Student{

int id;
char name[50];
int marks[5];
float percentage;
float result(float total);

public:

void  getdata() {
    cout << "Enter the student id :"<<endl;
    cin >> id;
    cout << "Enter the students name:"<< endl;
    cin >> name;
    cout <<  "Enter the five subject marks :"<<endl;
    for( int i=0;i<5;i++) {
        cin >> marks[i] ;
    }
}

void showdata() {
    cout << "Student Id is : " <<id<<endl;
    cout << "Name of the student is : " <<name<<endl;
    cout<<"the percentage is :"<<result(percentage)<<endl;
 }
};
float Student :: result(float total){
    total=0;
    for(int i=0;i<5;i++){
        total+=marks[i];
    }
    float percentage=total*100/500;
    return percentage;

}
int main(){
    Student s1[3];
    for(int i=1;i<=3;i++){
        cout<<"enter the student :"<<i<<endl;
        s1[i].getdata();
        s1[i].showdata();
    }
}