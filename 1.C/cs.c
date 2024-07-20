#include<stdio.h>

int main(){
	
		char ch;
		int j=2;
		int i;
		
		//printf("enter character:");
		//scanf("%c",&ch);
		
		for(i=65;i<=90;i+=2){
			if(j%2==0){
				printf("%c",i);
			}
			else{
			printf("%c",i+32);
		}
		j++;
}
		
		
		
return 0;
}