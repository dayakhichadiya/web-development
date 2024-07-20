#include<stdio.h>

struct Student{
	int id;
	char name[50];
	int marks;
	int total,per;
};
int main(){
	int i,j;

	
	struct Student student[2],marks[3];
	
	for( i=0;i<2;i++){
		int total=0;
		int per=0;
			printf("\nenter the id:");
			scanf("%d",&student[i].id);
			printf("enter the name:");
			scanf("%s",&student[i].name);
			
		for(j=0;j<3;j++){
			printf("enter the marks:\n");
			scanf("%d",&marks[j].marks);	
			total+=marks[j].marks;
			per=total*100/300;
	}
	printf("the total is: %d\n",total);
	printf("percentage is : %d\n",per);
	}

	
	return 0;
}