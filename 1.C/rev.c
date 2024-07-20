#include<stdio.h>



void rev(){
	
	int arr[20];
	int i,j,n;
	
	printf("enter size of array:");
	scanf("%d",&n);
	
	for(i=0;i<n;i++){
		scanf("%d",&arr[i]);
	}
		printf("reverse number is: ");
		
	for(i=n-1;i>=0;i--){
		printf("%d",arr[i]);
	}

}

int main(){
	rev(); 
	return 0;
}
