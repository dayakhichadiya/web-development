#include<iostream>
using namespace std;

class Manager 
{
    int id;
    char name[30];
    public:
    
     void getdata(){
        cout<<"enter the employee id :"<<endl;
        cin>>id;
        cout<<"enter  the employee name :"<<endl;
        cin>>name;
     }
    
};
class Employe{
    public:
    int salary;

    void detail(){
        cout<<"enter the employee salary : "<<endl; 
        cin>>salary;
    }
};
class Details : public  Manager,public Employe{
    public :
    int bonus=500;
    void display() {
        cout<<"employee salary="<<salary<<endl;
        cout<<"bonus is :"<<salary+bonus;

    }
};
int main(){
    Details d;
    d.getdata();
    d.detail();
    d.display();
    return 0;
}