#include<stdio.h>

int main(){

		int arr[5];
		int i,j;
		int sum=0,total=0;
		
		for(i=0;i<=5;i++){
			printf("enter the value: a[%d]",i);
			scanf("%d",&arr[i]);
		}
		for(i=0;i<=5;i++){
			printf("%d\n",arr[i]);
			if(i%2==0){
				sum+=i;
			}
			else{
				total+=i;
			}
		}
		printf("the even number sum is:%d\n",sum);
		printf("the odd number sum is:%d",total);

				


return 0;
}