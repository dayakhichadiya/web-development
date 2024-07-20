#include<stdio.h>

void sim(float p,float r,float n){

	
	float total=0;
	
	printf("enter amount:\n");
	scanf("%f",&p);
	
	printf("enter rate:\n");
	scanf("%f",&r);
	
	printf("enter number of year:\n");
	scanf("%f",&n);
	
	total=p*r*n/100;
	printf("the total amount is:%.2f\n",total);
}
int main(){
	float p,r,n;
	sim(p,r,n);
	return 0;
}