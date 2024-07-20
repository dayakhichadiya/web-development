#include<stdio.h>
#include<string.h>

int main(){
	
	char a[20];
	char b[20];
	int i,j,string;
	
	gets(a);
	gets(b);
	
	for(i=0;a[i]='\0';i++){
		printf("%c",a[i]);
	}
	for(i=0;b[i]='\0';i++){
		printf("%c",b[i]);
		string=a[i]+b[i];

	}
	printf("this string is: %c",string);
	




return 0;

}