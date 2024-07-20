#include<stdio.h>

int febonaci(int num){
	
	if(num==0){
		return 0;
	}
	else if(num==1){
		return 1;
	}
	else{
		return(febonaci(num-1)+febonaci(num-2));
	}

 }
 int main(){
	 
	 int n,i,num=1;
	 int total=0;
	 

	 
	 printf("enter number:");
	 scanf("%d",&n);
	 //total+=febonaci(num);
	 
	 for(i=1;i<=n;i++){
		 
		 printf("%d",febonaci(i));
	  
	  }
	return 0;
 }