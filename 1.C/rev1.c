#include<stdio.h>

void perfect(){

	int i,j,n;
	int r,sum=0;
	
	printf("enter number:");
	scanf("%d",&n);
	
	for(i=1;i<n;i++){
		r=n%i;
		if(r==0){
			sum=sum+i;
		}
		
	}
	if(sum==n){
		printf("the number is perfect");
	}
	else{
		printf("the number is not perfect");
	}
	
}
















int main(){
	perfect();
	return 0;
	
}