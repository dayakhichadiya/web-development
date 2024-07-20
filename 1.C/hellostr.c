#include<stdio.h>
#include<string.h>
int main(){

char a[20]={'h','e','l','l','o'};
char b[20];
int i,j;

		//printf("enter a string:");
		//gets(a);

		for(i=0;a[i]!='\0';i++){
			for(j=0;j<=i;j++){
				printf("%c",a[j]);
			}
			printf("\n");
		}
		
	
	return 0;
	}