#include<stdio.h>

int sim(float p,float r,float n){

	
	float total=0;
	
	printf("enter amount:\n");
	scanf("%f",&p);
	
	printf("enter rate:\n");
	scanf("%f",&r);
	
	printf("enter number of year:\n");
	scanf("%f",&n);
	
	total=p*r*n/100;
	return total;
	
}
int main(){
	float p,r,n;
	float total=0;
	total=sim(p,r,n);
	printf("the total amount is:%.2f\n",total);
	return 0;
}