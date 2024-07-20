#include<stdio.h>
#include<conio.h>

void main(){
	int i;
	int n;

	clrscr();
	printf("enter a number:");
	scanf("%d",&n);

	for(i=-n;i<=n;i++){
	printf("%d\n",i);
	}
}