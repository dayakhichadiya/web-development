#include <iostream> 
 
using namespace std; 
 
class Detail{ 
 
    char name[20]; 
    int roll; 
 
    public: 
    void getData(){ 
         
        cout << "enter the student roll Number :-" << endl; 
        cin >> roll; 
        cout << "enter the studetn name :-" << endl; 
        cin >> name; 
    } 
 
    void printDetail(){ 
        cout << "studnet Name is = " << roll << endl; 
        cout << "studnet Roll No is = " << name << endl; 
    } 
 
}; 
 
class marks{ 
    public: 
    int mark[3]; 
    int total=0; 
    int percentage=0; 
    void markData(){ 
        cout << "enter 3 subject marks :-"; 
        for(int i=0; i<3; i++){ 
            cin >> mark[i]; 
            total+=mark[i]; 
            percentage=total*100/300; 
        } 
    } 
 
    void markprint(){ 
        for(int i=0; i<3; i++){ 
            cout << "studnet marks is =" << mark[i] << endl; 
        } 
    } 
}; 
 
class Student : public Detail, public marks{ 
    public: 
    void showData(){ 
       printDetail(); 
       markprint(); 
       cout << "student total is =" << total << endl; 
       cout << "student percenaege is =" << percentage << endl; 
 
    } 
}; 
 
int main(){ 
 
    Student obj; 
 
    obj.getData(); 
    obj.markData(); 
    obj.showData(); 
 
    return 0; 
}