#include<stdio.h>
#include<conio.h>

void main()
{
	 char alpha;
    
    printf("enter alphabet:");
    scanf("%c",&alpha);
    
    if(alpha=='a' || alpha=='e' || alpha=='i' || alpha=='o'|| alpha=='u'){
        printf("vowel");
    }
    else{
        printf("consonant");
    }

}