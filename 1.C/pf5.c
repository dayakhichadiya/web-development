#include<stdio.h>

void pattern(){
	
	int i,j,k;
	
	for(i=1;i<=5;i++){
		for(j=i;j>=1;j--){
			printf("%c",65+j-1);
			
		}
		printf("\n");
	}
	}
int main(){
	
	pattern();
	return 0;
}


