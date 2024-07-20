#include <iostream>
using namespace std;
template <class X, class Y>

void fun(X a, Y b)
{
    cout << "value of a is :" << a << endl;
    cout << "value of b is :" << b << endl;
}

int main()
{
    fun("hello", 8);
    return 0;
}