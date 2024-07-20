#include<stdio.h>
#include<conio.h>

void main()
{
	int marks;

	clrscr();
	printf("enter marks:");
	scanf("%d",&marks);

	if(marks>34){
	printf("pass");
	}
	else{
	printf("fail");
	}
}