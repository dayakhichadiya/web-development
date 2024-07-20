#include<stdio.h>
#include<conio.h>
void main()
{
	char i;

	clrscr();
	for(i=65;i<=90;i++){
	if(i>=97 && i<=122 && i%2==1){
	printf("%c\t",i);
       }
	}
}
