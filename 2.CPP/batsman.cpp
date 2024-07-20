#include <iostream>
using namespace std;

class Batsman
{

    int bcode;
    char bname[20];
    int innings, notout, runs;
    float batavg;
    float calcavg(float batavg);

public:
    void readdata()
    {

        cout << "enter the bcode :" << endl;
        cin >> bcode;
        cout << "enter the bname:" << endl;
        cin >> bname;
        cout<<"enter the run :"<<endl;
        cin>>runs;
        cout << "enter the innings :" << endl;
        cin >> innings;
        cout << "enter the notout :" << endl;
        cin >> notout;
    }

    void showdata()
    {
        cout << "the bcode is :" << bcode << endl;
        cout << "the bname is :" << bname << endl;
        cout << "the innings is :" << innings << endl;
        cout << "run are :" <<runs<<endl;
        cout << "notout player is :" << notout << endl;
        cout << "average is :" <<calcavg(batavg);
    }
};
float Batsman::calcavg(float batavg)
{
    batavg = runs / (innings - notout);
    return batavg;
}

int main()
{
    Batsman b1;

    b1.readdata();
    b1.showdata();

    return 0;
}