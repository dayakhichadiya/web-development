#include<stdio.h>

int fac(int n){
	
	if(n==1){
		return 1;
	}
	else{
		return(n*(fac(n-1)));
	}

 }
 int main(){
	 int n;
	 int total=0;
	 printf("enter number:");
	 scanf("%d",&n);
	 total=fac(n);
	 
	 printf("the factorial is:%d",total);
	 }