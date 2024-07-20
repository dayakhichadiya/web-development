#include<stdio.h>
#include<conio.h>
void main()
{
	int i;
	int total=0;

	clrscr();
	for(i=0;i<=10;i++){
	if(i%2==0){
	total+=i;
	}
	}
	printf("%d\n",total);


}
