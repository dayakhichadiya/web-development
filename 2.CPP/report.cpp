#include <iostream>
using namespace std;

class Report
{
    int adno;
    char name[30];
    float marks[5];
    float average;
    float getavg(float total);

    public:
    void readinfo()
    {
        cout << "enter admission number :" << endl;
        cin >> adno;
        cout << "enter name:" << endl;
        cin >> name;
        cout << "Enter the five subject marks :" << endl;
        for(int i=0;i<5;i++){
            cin>>marks[i];
        }   
    }
    void display()
    {
        cout << "admission number is :" <<adno<< endl;
        cout << "name of student is :" <<name<< endl;
        cout << "marks in each subjects are :" <<marks[0]<<"\t"<<marks[1]<<"\t"<<marks[2]<<"\t"<<marks[3]<<"\t"<<marks[4]<< endl;
        cout << "average is: " << getavg(average) << endl;
        } 
};

float Report ::getavg(float total)
{
    total=0;
    for (int i = 0; i < 5; i++){
        total+=marks[i];
    }
    float average = total / 5;
    return average;
}
int main()
{
    Report r1;
    r1.readinfo();
    r1.display();
}