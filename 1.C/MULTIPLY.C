#include<stdio.h>
#include<conio.h>
void main()
{
	int i,n;

	clrscr();
	printf("enter number:");
	scanf("%d",&n);

	for(i=1;i<=n;i++){
	printf("%d\t",i*i);
	}
}