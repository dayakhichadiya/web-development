// javascript statemtent

/*

    CONDITIONAL STATEMENTS

1. if statement
2. if ...else statement
3. else ...if statement
4. ladder if ...else statement
5. Nested if ...else statement
6. switch case

*/

/*
    SYNTAX:

// if statements

if (condition){
    statement
}


// with an else clause

if (condition){
    statement1    
else {
    statement2
}
}

*/
    
// EXAMPLES:

{
    let age = 17;

if(age < 18){
    console.log('you are not eligible for vote !!!')
}
}

{
    let age = 18;

    if(age >= 18){
        console.log('you are eligible for vote !!!')
    }
    else{
        console.log('you are not eligible for vote !!!')
    }
    
}

{
    let age = 17;
    let card = true;

    if(age < 18){
        console.log('you are not eligible')
    }
    else if(card == true){
        console.log('you are  eligible for vote')
    }
    else{
        console.log('you are not eligible for vote')
    }
}

{
    let age = 12;
    let card = true;

    if(age >= 18 && card == true){
        console.log('you are eligible')
    }
    else{
        console.log('you are not eligible for vote')
    }
}


// SWITCH CASE STATEMENT

{
    let subject = 'hindi';

    switch (subject){
        case 'chemistry' : console.log('chemistry book available') ;
        break;
        case 'physics' : console.log('physics book available') ;
        break;
        case 'maths' : console.log('maths book available') ;
        break;
        case 'gujarati' : console.log('gujarati book available') ;
        break;
        case 'biology' : console.log('biology book available') ;
        break;
        case 'hindi' : console.log('hindi book available') ;
        break;
        case 'english' : console.log('english book available') ;
        break;
        default : console.log('book are not available');
    }
}


/* JAVASCRIPT LOOPS

1. while loop
2. do-while loop
3. for loop
4. for ...each loop
5. for ...of loop
6. for ...in loop
7. nested loop
8. loop with break statements
9. loop with continue statements

*/

/*  Syntax:

///  while loop

while (condition){
    statements,
    afterthought
}

///  do-while condition

do {
    statements,
    afterthought
}
    while(condition)

///  for loop

for(initialization; condition; afterthought){
    statements
}

/// for ...each loop

array.forEach (function(currentValue, index, arr))

for (variable of iterable)
    statement

for (variable in object)
    statement

*/

{
    let a = 0;

    while (a <= 10){
        console.log(a, 'while loop');
        a++;
    }
}

{
    let a = 0;

    do {
        console.log(a, 'do-while loop');
        a++;
    }
    while(a < 5)
}

{
    let i = 0;

    for(i; i <= 5; i++){
        console.log(i,'for loop')
    }
}