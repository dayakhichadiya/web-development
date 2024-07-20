#include<stdio.h>

int sum(){
	
	int i,n,total;
	
	
	
	for(i=0;i<=10;i++){
		total+=i;
	}
	

return total; 
}
int main(){
	int total=0;
	total=sum();
	printf("%d",total);
return 0;
}