#include<stdio.h>

void main()
{
 int marks[3],sum,perc;
 int i,j;
 
 for( i=1;i<=5;i++)
 {
  printf("Enter marks for student %d\n",i);
  sum=0;
  perc=0;
  for( j=0;j<3;j++)
  {
   printf("Enter marks for subject %d :",j+1);
   scanf("%d",&marks[j]);
   sum+=marks[j];
  }
  perc= sum*100/300;
  printf("\nTotal of student %d = %d",i,sum);
  printf("\nPerncentage of student %d = %d\n",i,perc);
  if(perc>=75)
   printf("student %d get A garde",i);
  else if(perc>=65)
   printf("student %d get B garde",i);
  else if(perc>=55)
   printf("student %d get C garde",i);
  else if(perc>=35)
   printf("student %d get D garde",i);
  else
   printf("student %d is fail",i);
  printf("\n\n\n");
 }
}
