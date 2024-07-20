#include<stdio.h>

void pattern(){
	
	int i,j,k=1;
	for(i=1;i<=5;i++){
		for(j=1;j<=i;j++){
			printf("%d",k++);
		}
		printf("\n");
	}

}
int main(){
	pattern();
	return 0;
}