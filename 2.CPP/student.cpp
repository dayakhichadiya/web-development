#include <iostream>

using namespace std;
class Student
{
private:
    int adno;
    char name[20];
    float maths;
    float science;
    float eng;
    float total;
    float ctotal(float maths, float science, float eng);

public:
    float takedata()
    {
        cout << "enter the student admin number:" << endl;
        cin >> adno;
        cout << "enter the student name: ";
        cin >> name;

        cout << "Enter marks in Maths: ";
        cin >> maths;
        cout << "Enter marks in science: ";
        cin >> science;
        cout << "Enter marks in eng: ";
        cin >> eng;

        
    }
    float showdata(){
        cout<<"admin number:"<<adno<<endl;
        cout<<"name:"<<name<<endl;
        cout<<"marks"<<maths<<endl;
        cout<<"marks"<<science<<endl;
        cout<<"marks"<<eng<<endl;
    
        cout << ctotal(maths, science, eng);
    }
};
float Student::ctotal(float maths,float science, float english){
    total=maths+science+english;
    return total;
}
int main(){
    Student s1;
    s1.takedata();
    s1.showdata();

}
