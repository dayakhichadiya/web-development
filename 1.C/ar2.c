#include<stdio.h>

int main(){

		int arr[5];
		int arr1[4];
		int i,j;
		
		for(i=0;i<4;i++){
			printf("enter the data %d:",i);
			scanf("%d",&arr[i]);
		}
		for(i=0;i<4;i++){
			printf("value of %d\n",arr[i]);
		}
			
		for(j=0;j<3;j++){
			printf("enter the data2 %d:",j);
			scanf("%d",&arr1[j]);
		}
		for(j=0;j<3;j++){
			printf("value is %d\n",arr1[j]);
		}

		
return 0;
}