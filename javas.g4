grammar javas;

program: statement* EOF;

statement
    : assignmentStatement
    | consoleStatement
    ;

assignmentStatement
    : Identifier '=' expression ';'
    ;

consoleStatement
    : 'console' '.' 'log' '(' expression ')' ';'
    ;

expression
    : term ('+' term)*
    ;

term
    : Identifier
    | Number
    | '(' expression ')'
    | StringLiteral
    ;

StringLiteral
    : '"' (~["\r\n])* '"'
    ;

Identifier
    : [a-zA-Z] [a-zA-Z0-9_]*
    ;

Number
    : [0-9]+
    ;

WS
    : [ \t\r\n]+ -> skip
    ;