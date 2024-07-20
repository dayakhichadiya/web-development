#include <iostream>
using namespace std;

void sum(int length,int breadth,int  height)  
{
    cout <<length*breadth*height<< endl;
}
void sum(float pie,int r1,int r2,int height )
{
    cout << pie * r1 *  r2 * height  << endl;
}
void sum(int s1, int s2)
{
    cout << s1 * s2 * 3 << endl;
}
void sum(int a)
{
    cout<<a*a*a;

}

int main()
{
    cout<<"volume of solid:"<<endl;
    sum(4, 6, 2);
    cout<<"volume of sphere:"<<endl;
    sum(3.14,4,4,2);
    cout<<"volume of square: "<<endl;
    sum(5,9,2);
    cout<<"volume of cube :"<<endl;
    sum(4);

    
    
    return 0;
}