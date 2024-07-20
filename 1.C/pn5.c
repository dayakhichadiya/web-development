#include<stdio.h>

int main(){

		int i=1;
		int k=1;
		while(i<=5){
			int j=1;
			while(j<=i){
				printf("%d",k++);
				j++;
			}
			printf("\n");
			i++;
		}


return 0;
}