#include <iostream>
using namespace std;

class Employe
{

    int salary = 10000;
    int id;
    char name[20];

public:

    void getdata()
    {
        cout << "Enter the employe id :" << endl;
        cin >> id;
        cout << "Enter the employe name :" << endl;
        cin >> name;
        cout << "The salary of employe is :" << salary << endl;
    }
};
class Bonus : public Employe
{
public:
    int plus ;
    void  bonus(){
        cout<<"enter the bonus :"<<endl;
        cin>>plus;
    }

};
int main()
{
    Bonus b;
    b.getdata();
    b.bonus();
    return 0;
}