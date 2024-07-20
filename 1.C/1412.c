#include<stdio.h>


int main(){
		int i,n;
		int k=2;
		
		
		for(i=1;i<=10;i++){
			if(i==1){
			printf("%d\n",i);
			}
			else{
					printf("%d\t",i*k);
					k*=2;
			}
		}
		
return 0;
}
       