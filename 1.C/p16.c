#include<stdio.h>

int main(){
		
		int a,i,j,k;
		
		for( i=0;i<=7;i++){
			if(i<5){
			a=2*(5-i)-1;
			}
			else{
			a=2*(i-5+1)+1;
			}
			for(j=0;j<a;j++){
			printf(" ");
		}
		
		for(k=0;k<8-a;k++){
		printf("* ");
		}
		printf("\n");
}
return 0;
}