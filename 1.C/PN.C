#include<stdio.h>
#include<conio.h>

void main(){
	int number;

	clrscr();
	printf("enter a number:");
	scanf("%d",&number);

	if(number>1){
	printf("the value is positive");
	}
	else if(number==0) {
	printf("the value is zero");
}
	else{
	printf("negative");
	}
}