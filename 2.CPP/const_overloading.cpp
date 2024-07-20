#include<iostream>
using namespace std;

class All{
    int radius;
    int pi=3.14;
    int total;
   
    int square;
    int rectangle;
    int triangle;
    
    public:
    All(){
        cout<<"enter the radius :"<<endl;
        cin>>radius;
        total=pi*radius*radius; 
        cout<<"area of circle is :"<<total<<endl;
}  
    All(int area){
        square= area*area;
        cout<<"area of square is :"<<square<<endl;
    }

    All(int breadth,int length){
        rectangle=breadth*length;
        cout<<"Area of Rectangle is:"<<rectangle<<endl;
    }
    All(int height,int base,int div){
        triangle=height*base/div;
        cout<<"Area of Triangle is:"<<triangle;

    }
};
    

int main(){

    All circle,square(6),rectangle(5,8),triangle(8,4,2);

    return 0;
}