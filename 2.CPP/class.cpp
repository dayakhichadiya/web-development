#include<iostream>

using namespace std;
class Complex{
    private:
    int a;

    public:
    void setdata();
    void printdata(){
    cout<<"object is"<<a<<endl;
    }
  };
  void Complex::setdata(){
    cout<<"enter the value:";
    cin>>a;
  }
int main(){
    Complex obj1,obj2;
    obj1.printdata();
    obj2.setdata();
    obj2.printdata();

    return 0;
}