#include<stdio.h>

int main(){

		int i,j,total=0;
		int sum=0,add=0;
		int arr[3][3]={{1,2,3},{4,5,6},{7,8,9}};
		
		for(i=0;i<3;i++){
			for(j=0;j<3;j++){
				printf("%d",arr[i][j]);
			}
			printf("\n");
		}
		for(i=0;i<3;i++){
			for(j=0;j<3;j++){
				if(i>j){
					total+=arr[i][j];
					
				}
				else if(i<j){
					sum+=arr[i][j];
					
				}
				else if(i==j){
					add+=arr[i][j];
					
				}
		}
		
		}
		printf("the total of upper triangle is: %d\n",total);
		printf("the sum of lower triangle is :%d\n",sum);
		printf("the additin of diagonal is:%d\n",add);
			
		
		
		
return 0;
}