#include<stdio.h>

int i,j,total=0;
int sum,per;
int marks[3];

void result(){
	
	for(i=1;i<=3;i++){
		printf("\nenter the marks of student %d\n",i);
		sum=0;
		per=0;
		
		for(j=1;j<=3;j++){
			printf("enter the marks: %d :",j+1);
			scanf("%d",&marks[j]);
			sum+=marks[j];
		}
		per=sum*100/300;
		printf("total :%d\n",sum);
		printf("percentage : %d",per);
	}
}
int main(){
	result();
	return 0;
}
