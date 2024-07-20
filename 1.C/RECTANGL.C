#include<stdio.h>
#include<conio.h>
void main()
{
	int w,l;
	int total=0;

	clrscr();

	printf("enter the value of w:");
	scanf("%d",&w);
	printf("enter the value of h:");
	scanf("%d",&l);

	total=w*l;
	printf("area of rectangle:%d",total);

}
