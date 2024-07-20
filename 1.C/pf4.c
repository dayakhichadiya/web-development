#include<stdio.h>

void pattern(){
	
	int i,j,k=65;
	for(i=1;i<=5;i++){
		for(j=1;j<=i;j++){
			printf("%c",k++);
		}
		printf("\n");
	}

}
int main(){
	pattern();
	return 0;
}