#include<stdio.h>
#include<conio.h>

void main(){
	int number;

	clrscr();
	printf("enter the number:");
	scanf("%d",&number);

	if(number%5==0){
	printf("the value is divisible");
	}
	else{
	printf("the value is not divisible");
	}
}