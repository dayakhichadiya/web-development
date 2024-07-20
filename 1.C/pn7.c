#include<stdio.h>

int main(){

		int i=1;
		int k=65;
		while(i<=5){
			int j=1;
			while(j<=i){
				printf("%c",k++);
			j++;
			}
			printf("\n");
			i++;
		}
return 0;
}