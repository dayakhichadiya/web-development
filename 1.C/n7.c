#include<stdio.h>

int main(){
		
		int i=0;
		while(i<10){
			i++;
			int j=1;
			while(j<=5){
			j++;
			if(i%2==1){
			printf("%d\t",i);
				}
			}
			printf("\n");
		}
		

return 0;
}