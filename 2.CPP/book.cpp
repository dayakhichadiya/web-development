#include<iostream>
using namespace  std;

class Book{
    private:
    int bookno;
    char bname[20];
    float price;
    float total;
    float copies;
    float totalcost(float price);
    
    public:
    void input() {
        cout << "Enter the book number : "<<endl;
        cin >> bookno;
        cout << "Enter the name of the book: "<<endl;
        cin>>bname;
        cout << "Enter the price of the book "<< endl;
        cin >>price ;
          cout<<"enter the number of copies:"<<endl;
        cin>>copies;
    }

    
void showdata(){
    cout<<"Book Number : "<<bookno<<endl;
    cout<<"Name of the book : "<<bname<<endl;
    cout<<"Price of book is: "<<price<<endl;
    cout<<"total is:"<<totalcost(price)<<endl;

}
};

float Book:: totalcost(float pricee){
    
      
        total=pricee*copies;
        return total;
    }
int main(){
    Book B1;
    B1.input();
    B1.showdata();

}