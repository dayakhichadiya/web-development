#include<stdio.h>
#include<conio.h>

void main()
{
	int i,n;
	int t=1;

	clrscr();
	printf("enter number:");
	scanf("%d",&n);

	for(i=1;i<=n;i++){
	t=t*2;
	printf("%d\t",t);
	}
}