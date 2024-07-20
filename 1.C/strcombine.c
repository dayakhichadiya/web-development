#include<stdio.h>
#include<string.h>

int main(){

	char arr[50];
	char arr1[50];
	char i,j;
	
	gets(arr);
	gets(arr1);
	
	for(i=0;arr[i]!='\0';i++);
	for(j=0;arr1[j]!='\0';j++,i++){	
	arr[i]=arr1[j];
}
	arr[i]='\0';
	printf("the string is: %s",arr);

return 0;
}