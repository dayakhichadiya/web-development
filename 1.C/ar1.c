#include<stdio.h>

int main(){

		int arr[5];
		int i;
		
		for(i=0;i<=4;i++){
			printf("enter the element of array%d:",i);
			scanf("%d",&arr[i]);
		}
		for(i=0;i<=4;i++){
			printf("position is:%d element is:%d\n",i,arr[i]);
		
		}






return 0;
}