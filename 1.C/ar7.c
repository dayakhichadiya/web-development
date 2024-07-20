#include<stdio.h>

int main(){
	
		int marks[3];
		int sum,i,j;
		int per;

		for(i=1;i<=5;i++){
			printf("\nenter marks for student %d:\n",i);
			sum=0;
			per=0;
			for(j=0;j<3;j++){
				printf("enter the marks for subject %d \n",j+1);
				scanf("%d",&marks[j]);
				sum+=marks[j];			
		}
	
		per=sum*100/300;
		printf("total marks of student %d: %d\n",i,sum);
		printf("percentage of student: %d",per);
		
		if(per>75){
			printf("\n grade A");
		}
		else if(per>60 && per<75){
			printf("\n grade B");
		}
		else if(per>45 && per<60){
			printf("\n grade C");
		}
		else if(per>35 && per<45){
			printf("\n grade D");
		}
		else{
			printf("\n fail");
		}
		}

return 0;


}