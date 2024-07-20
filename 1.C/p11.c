#include<stdio.h>

int main(){
		
		int i,j;
		int k=65;
		
		for(i=1;i<=5;i++){
			for(j=i;j>=1;j--){
			printf("%c",65 + j-1);
			}
		printf("\n");
		
		}


return 0;
}