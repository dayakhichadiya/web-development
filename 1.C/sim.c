#include<stdio.h>

void sim(){

	float p,r,n;
	float total=0;
	
	printf("enter amount:\n");
	scanf("%f",&p);
	
	printf("enter rate:\n");
	scanf("%f",&r);
	
	printf("enter number of year:\n");
	scanf("%f",&n);
	
	total=p*r*n/100;
	printf("the total amount is:.2%f\n",total);
}
int main(){
	sim();
	return 0;
}