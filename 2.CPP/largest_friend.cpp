#include<iostream>
using namespace std;

class large{
    int a;
    int b;
    public:
    void getdata() {
        cout << "Enter the value of a': "<<endl;
        cin >> a;
        cout << "Enter the value of b': "<<endl;
        cin >> b;
    }
    
   friend void showlargest(large t);

};
      void showlargest(large t){
        if(t.a>t.b){
            cout << "The largest number is : "<< t.a<<endl ;
        }else{
            cout << "The largest number is : "<< t.b<<endl ;
        }
      }     
int main(){
    large t;
    t.getdata();
    showlargest(t);
}