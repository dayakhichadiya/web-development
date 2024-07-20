#include <iostream> 
 
using namespace std; 
 
class Restrorunt{ 
 
    public: 
    int arr[5]={240,160,120,30,400}; 
    char item; 
    int qty[1]; int qty2[1]; int qty3[1]; int qty4[1]; int qty5[1]; 
    int q; 
    int sum1=0; int sum2=0; int sum3=0; int sum4=0; int sum5=0; 
    int Total=0; 
    int GST; 
    int SubTotal=0; 
 
 
    void menu(); 
    void order(); 
    void bill(); 
 
}; 
 
 
void Restrorunt :: menu(){ 
 
    cout << endl << "=======================Menu======================"; 
    cout << endl << "___________________________________________________"; 
    cout << endl << "|  1.  Pizza                                Rs:240 |"; 
    cout << endl << "|  2.  Burger                               Rs:160 |"; 
    cout << endl << "|  3.  Green Sandwich                       Rs:120 |"; 
    cout << endl << "|  4.  cold                                  Rs:30 |"; 
    cout << endl << "|  5.  Biryani                              Rs:400 |";  
    cout << endl << "|__________________________________________________|" << endl; 
 
}; 
 
 
void Restrorunt :: order(){ 
 
    cout << endl << "=======================Order======================" << endl; 
 
    cout << "please enter number from menu you want to eat :- "; 
    cin >> item; 
 
    switch (item){ 
       case '1': 
 
                
 
               for(int i=0; i<1; i++){ 
                   cout<< endl <<"enter pizza quantity do you want? "; 
                   cin >> qty[i]; 
                   if(qty[i]>=20){ 
                     cout << "out if stock!" << endl; 
                   } 
               } 
 
 
       break; 
 
       case '2': 
 
                for(int i=0; i<1; i++){ 
                   cout<< endl <<"enter Burger quantity do you want? "; 
                   cin >> qty2[i]; 
               } 
 
        break; 
 
        case '3': 
 
               for(int i=0; i<1; i++){ 
                   cout<< endl <<"enter Green Sandwich quantity do you want? "; 
                   cin >> qty3[i]; 
               } 
 
        break; 
 
        case '4': 
 
               for(int i=0; i<1; i++){ 
                   cout<< endl <<"enter Cold quantity do you want? "; 
                   cin >> qty4[i]; 
               } 
 
        break; 
 
        case '5': 
               for(int i=0; i<1; i++){ 
                   cout<< endl <<"enter Biryani quantity do you want? "; 
                   cin >> qty5[i]; 
               } 
        break; 
    } 
 
 
 
}; 
 
void Restrorunt :: bill(){ 
 
     cout << endl << "=======================Bill======================" << endl; 
 
     cout << endl << "Item       quntity          Price         Amount"<< endl; 
     cout << "________________________________________________________"<<endl; 
      
     for(int i=0; i<1; i++){ 
          
        sum1=qty[i]*arr[0]; 
        sum2=qty2[i]*arr[1]; 
        sum3=qty3[i]*arr[2]; 
        sum4=qty4[i]*arr[3]; 
        sum5=qty5[i]*arr[4]; 
        if(qty[i]>=20){ 
            Total=sum2+sum3+sum4+sum5; 
        } 
        else{ 
            Total=sum1+sum2+sum3+sum4+sum5; 
        } 
         
        GST=Total*18/100; 
        SubTotal=Total+GST; 
          
         if(qty[i]<20){ 
             cout << "pizza" << "\t\t\t" << qty[i] << "\t\t\t"<< arr[0] << "\t\t\t"<<sum1<<endl; 
         } 
         if(qty2[i]>=1){ 
         cout << "Burger" << "\t\t\t" << qty2[i] << "\t\t\t"<< arr[1] << "\t\t\t"<<sum2<<endl; 
         } 
         if(qty3[i]>=1){ 
         cout << "Green Sandwich" << "\t" << qty3[i] << "\t\t\t"<< arr[2] << "\t\t\t"<<sum3<<endl; 
         } 
         if(qty4[i]>=1){ 
         cout << "Cold" << "\t\t\t" << qty4[i] << "\t\t\t"<< arr[3] << "\t\t\t"<<sum4<<endl; 
         } 
         if(qty5[i]>=1){ 
         cout << "Biryani" << "\t\t\t" << qty5[i] << "\t\t\t"<< arr[4] << "\t\t\t"<<sum5<<endl; 
         } 
         cout << "________________________________________________________"<<endl; 
         cout << "                                  Total    : "<<Total << endl; 
         cout << "                                  GST 18%  : "<< GST << endl;
cout << "________________________________________________________"<<endl; 
         cout << "                                  SubTotal  : "<< SubTotal << endl; 
 
    }  
     
  
}; 
 

int main(){ 
 
    Restrorunt obj; 
    char option; 
  
 
  do{ 
 
   cout << endl << "===========================Resto============================" << endl; 
   cout << endl << "1. For Menu "; 
   cout << endl << "2. For Order "; 
   cout << endl << "3. For Bill "; 
   cout << endl << "4. Exit "; 
   cout << endl << "============================================================" << endl; 
 
   cout << "Please select any option :- "; 
   cin >> option; 
 
   switch (option){ 
 
            case '1': 
                "1. For Menu \n"; 
                obj.menu(); 
                break; 
 
            case '2': 
                "2. For Order \n"; 
                obj.order(); 
                break; 
 
            case '3': 
                "3. For Bill \n"; 
                obj.bill(); 
                break; 
 
            case '4': 
                goto end; 
                break; 
 
    } 
 
   }  
   while(option!=7); 
 
   end: cout << endl << "\t \t Thank you for Visiting \t"; 
 
    return 0; 
}