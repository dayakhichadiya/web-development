#include<stdio.h>

int sum(){
	
	int i,total=0;
	for(i=0;i<=10;i++){
		if(i%2==1){
			total+=i;
		}
	}
	return total;
}
int main(){
	int total=0;
	total=sum();
	printf("the total is: %d",total);


return 0;
}