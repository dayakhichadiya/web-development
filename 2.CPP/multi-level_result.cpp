#include <iostream>
using namespace std;

class Student
{
    int rollno;
    char name[20];

public:
    void getdata()
    {
        cout << "enter the Roll no : " << endl;
        cin >> rollno;
        cout << "Enter the Name : " << endl;
        cin >> name;
    }
    
    void detail(){
        cout<<"Roll No. = "<<rollno<<endl;
        cout<<"Name = "<<name<<endl;
    }
};

class base
{
    
public:
int marks;
    int total = 0;
    int per;
    int sci,maths,eng;
    

    void showdata()
    {
        cout << "enter the sci marks : " << endl;
        cin>>sci;
        cout << "enter the  maths marks : " << endl;
        cin>>maths;
        cout<<"enter the english marks :"<<endl;
        cin>>eng;

            total += sci+maths+eng;
            per = total * 100 / 300;
    }
    
     void markprint(){ 
        
            cout << "total marks is =" <<total << endl; 
        }
};
class Result : public Student, public base
{
    public:
    void printdata(){
        detail();
        markprint();
        cout<<"Percentage = "<<per<<endl;   
    }
    
};  


int main()
{
    Result p;

    p.getdata();
    p.showdata();
    p.printdata();
    return 0;
}