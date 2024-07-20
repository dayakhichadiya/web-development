#include <iostream>
using namespace std;

class Square
{

    int a;
    int total;

public:
    Square()
    {
        cout << "enter the value:" << endl;
        cin >> a;
        total = a * a;
    }
    ~Square()
    {
        cout << "The square of " << a << " is " << total << endl;
    }
};
int main()

{
    Square s1;
    return 0;
}
