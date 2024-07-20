#include<iostream>
using namespace std;

class Student{

    int marks;
    int student;
    public:

   void setdata(int student){
    cout << "Enter the ID : "<<endl;
    cin >> marks;
   }
    void showdata(){
        cout<<"marks of student:"<<marks<<endl;
    }

};


int main(){
    Student s[3];
    
    for (int i = 0; i < 3; i++) {
        s[i].setdata(i);
    }
    cout << "Marks of students are : " ;
    for (int j = 0; j < 3; j++) {
        s[j].showdata();
    }

return 0;
}
