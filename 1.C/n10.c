#include<stdio.h>
int main(){
		
		int k=11;
		int i=1;
		while(i<=5){
		int j=1;
		while(j<=5){
		printf("%d",k++);
		j++;
		}
		printf("\n");
		i++;
		k+=5;
		}


return 0;
}