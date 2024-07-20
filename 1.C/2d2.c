#include<stdio.h>

int main(){
		
		int i,j,total=0;
		int arr[3][3];
		
		for(i=0;i<3;i++){
			for(j=0;j<3;j++){
				printf("enter the %d and %d :",i,j);
				scanf("%d",&arr[i][j]);
			}
		}
		for(i=0;i<3;i++){
			for(j=0;j<3;j++){
				printf("%d",arr[i][j]);
				total+=arr[i][j];
				
			}
			printf("\n");
		}
		printf("the total is :%d\n",total);





return 0;


}