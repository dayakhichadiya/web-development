#include<stdio.h>

void pattern(){
	
	int i,j;
	
	for(i=1;i<=5;i++){
		for(j=1;j<=i;j++){
			printf("%d",i);
	}
	printf("\n");
}
		
}
int main(){
	pattern();
	return 0;
}
