 #include<iostream> 
 
using namespace std; 
 
class Complex{ 
    int a; 
 
    public: 
    Complex(){ 
        cout<<"Enter the value of a:"; 
        cin>>a; 
    } 
    ~Complex(){ 
        cout<<a<<endl; 
    } 
    void print(){ 
        cout<<a; 
    } 
 
// }; 
 
 
// int main(){ 
//     Complex obj1; 
//     obj1.print(); 
//     return 0; 
 
// } 
 
 
#include<iostream> 
 
using namespace std; 
 
class Complex{ 
    int a; 
 
    public: 
    Complex(int a){ 
         
       cout<<a+20<<endl; 
    } 
     
    Complex(int b,int c){ 
       cout<<c+b<<endl; 
    } 
    
 
}; 
 
 
int main(){ 
    int a=10; 
 
    Complex obj1(a),obj2(50,60); 
    return 0; 
 
}
