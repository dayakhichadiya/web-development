#include<stdio.h>
#include<conio.h>
void main()
{
    int number;
    clrscr();

    printf("enter number:");
    scanf("%d",&number);

    if(number%5==0 && number%3==0)
    {
    printf("number is divisible");
    }else{
    printf("number is not divisible");
    }


}
