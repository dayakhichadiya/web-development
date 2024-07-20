#include <iostream>
using namespace std;

class Test
{
    int testcode;
    int candidate;
    int center;
    char des[20];
    int calcntr(int candidet);
    int centerReq;

public:
    void schedule()
    {
        cout << "enter values for testcode:" << endl;
        cin >> testcode;
        cout << "Enter description for Candidate" << endl;
        cin >> des;
        cout << "enter no of candidate:" << endl;
        cin >> candidate;
    }

    void disptest()
    {
        cout << "testcode is:" << testcode << endl;
        cout << "Description is : " << des << endl;
        cout << "Number of candidates are :" << candidate << endl;
        cout << calcntr(candidate);
    }
};

 int Test::calcntr(int candidet)
    {
        centerReq = candidate / 100 + 1;
        return centerReq;
    }
int main()
{
    Test t1;
    t1.schedule();
    t1.disptest();
    
}