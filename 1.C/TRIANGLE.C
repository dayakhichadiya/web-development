#include<stdio.h>
#include<conio.h>

void main()
{
	int h,b;
	int total=0;

	clrscr();

	printf("enter the value of h:");
	scanf("%d",&h);

	printf("enter the value of b:");
	scanf("%d",&b);

	total=h*b/2;
	printf("area of triangle is:%d",total);
}