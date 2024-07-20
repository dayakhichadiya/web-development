#include<stdio.h>

int sum()
{
	int i;
	int total=0;
	
	for(i=1;i<=10;i++){
		total+=i;
	}
	return total;
}

int main(){
	int total=0;
	total=sum();
	printf("the total is: %d \n",total);

return 0;
}