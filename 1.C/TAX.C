#include<stdio.h>
#include<conio.h>
void main()
{
	int tax;
	float rate;

	clrscr();
	printf("enter tax:");
	scanf("%d",&tax);

	if(tax<2500){
	printf("the tax is %.2f",rate);
	}
	else if(tax>2500 && tax<=5000 ){
	rate=tax*10/100;
	printf("the tax is %.2f",rate);
	}
	else if(tax>5000 && tax<=10000){
	rate=tax*20/100;
	printf("the tax is %.2f",rate);
	}
	else if(tax>10000){
	rate=tax*30/100;
	printf("the tax is %.2f",rate);
	}
}
