// Generated from javas.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import javasListener from './javasListener.js';
import javasVisitor from './javasVisitor.js';

const serializedATN = [4,1,12,55,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,5,0,14,8,0,10,0,12,0,17,9,0,1,0,1,0,1,1,1,1,3,1,23,8,1,1,2,1,
2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,5,4,41,8,4,10,
4,12,4,44,9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,53,8,5,1,5,0,0,6,0,2,4,6,8,
10,0,0,54,0,15,1,0,0,0,2,22,1,0,0,0,4,24,1,0,0,0,6,29,1,0,0,0,8,37,1,0,0,
0,10,52,1,0,0,0,12,14,3,2,1,0,13,12,1,0,0,0,14,17,1,0,0,0,15,13,1,0,0,0,
15,16,1,0,0,0,16,18,1,0,0,0,17,15,1,0,0,0,18,19,5,0,0,1,19,1,1,0,0,0,20,
23,3,4,2,0,21,23,3,6,3,0,22,20,1,0,0,0,22,21,1,0,0,0,23,3,1,0,0,0,24,25,
5,10,0,0,25,26,5,1,0,0,26,27,3,8,4,0,27,28,5,2,0,0,28,5,1,0,0,0,29,30,5,
3,0,0,30,31,5,4,0,0,31,32,5,5,0,0,32,33,5,6,0,0,33,34,3,8,4,0,34,35,5,7,
0,0,35,36,5,2,0,0,36,7,1,0,0,0,37,42,3,10,5,0,38,39,5,8,0,0,39,41,3,10,5,
0,40,38,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,9,1,0,0,0,44,
42,1,0,0,0,45,53,5,10,0,0,46,53,5,11,0,0,47,48,5,6,0,0,48,49,3,8,4,0,49,
50,5,7,0,0,50,53,1,0,0,0,51,53,5,9,0,0,52,45,1,0,0,0,52,46,1,0,0,0,52,47,
1,0,0,0,52,51,1,0,0,0,53,11,1,0,0,0,4,15,22,42,52];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class javasParser extends antlr4.Parser {

    static grammarFileName = "javas.g4";
    static literalNames = [ null, "'='", "';'", "'console'", "'.'", "'log'", 
                            "'('", "')'", "'+'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "StringLiteral", "Identifier", "Number", 
                             "WS" ];
    static ruleNames = [ "program", "statement", "assignmentStatement", 
                         "consoleStatement", "expression", "term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = javasParser.ruleNames;
        this.literalNames = javasParser.literalNames;
        this.symbolicNames = javasParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, javasParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===10) {
	            this.state = 12;
	            this.statement();
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 18;
	        this.match(javasParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, javasParser.RULE_statement);
	    try {
	        this.state = 22;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 20;
	            this.assignmentStatement();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 21;
	            this.consoleStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, javasParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.match(javasParser.Identifier);
	        this.state = 25;
	        this.match(javasParser.T__0);
	        this.state = 26;
	        this.expression();
	        this.state = 27;
	        this.match(javasParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	consoleStatement() {
	    let localctx = new ConsoleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, javasParser.RULE_consoleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(javasParser.T__2);
	        this.state = 30;
	        this.match(javasParser.T__3);
	        this.state = 31;
	        this.match(javasParser.T__4);
	        this.state = 32;
	        this.match(javasParser.T__5);
	        this.state = 33;
	        this.expression();
	        this.state = 34;
	        this.match(javasParser.T__6);
	        this.state = 35;
	        this.match(javasParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, javasParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.term();
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 38;
	            this.match(javasParser.T__7);
	            this.state = 39;
	            this.term();
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, javasParser.RULE_term);
	    try {
	        this.state = 52;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.match(javasParser.Identifier);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.match(javasParser.Number);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 47;
	            this.match(javasParser.T__5);
	            this.state = 48;
	            this.expression();
	            this.state = 49;
	            this.match(javasParser.T__6);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 51;
	            this.match(javasParser.StringLiteral);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

javasParser.EOF = antlr4.Token.EOF;
javasParser.T__0 = 1;
javasParser.T__1 = 2;
javasParser.T__2 = 3;
javasParser.T__3 = 4;
javasParser.T__4 = 5;
javasParser.T__5 = 6;
javasParser.T__6 = 7;
javasParser.T__7 = 8;
javasParser.StringLiteral = 9;
javasParser.Identifier = 10;
javasParser.Number = 11;
javasParser.WS = 12;

javasParser.RULE_program = 0;
javasParser.RULE_statement = 1;
javasParser.RULE_assignmentStatement = 2;
javasParser.RULE_consoleStatement = 3;
javasParser.RULE_expression = 4;
javasParser.RULE_term = 5;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = javasParser.RULE_program;
    }

	EOF() {
	    return this.getToken(javasParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof javasListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof javasListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof javasVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = javasParser.RULE_statement;
    }

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	consoleStatement() {
	    return this.getTypedRuleContext(ConsoleStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof javasListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof javasListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof javasVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = javasParser.RULE_assignmentStatement;
    }

	Identifier() {
	    return this.getToken(javasParser.Identifier, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof javasListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof javasListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof javasVisitor ) {
	        return visitor.visitAssignmentStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConsoleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = javasParser.RULE_consoleStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof javasListener ) {
	        listener.enterConsoleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof javasListener ) {
	        listener.exitConsoleStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof javasVisitor ) {
	        return visitor.visitConsoleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = javasParser.RULE_expression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof javasListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof javasListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof javasVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = javasParser.RULE_term;
    }

	Identifier() {
	    return this.getToken(javasParser.Identifier, 0);
	};

	Number() {
	    return this.getToken(javasParser.Number, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	StringLiteral() {
	    return this.getToken(javasParser.StringLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof javasListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof javasListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof javasVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




javasParser.ProgramContext = ProgramContext; 
javasParser.StatementContext = StatementContext; 
javasParser.AssignmentStatementContext = AssignmentStatementContext; 
javasParser.ConsoleStatementContext = ConsoleStatementContext; 
javasParser.ExpressionContext = ExpressionContext; 
javasParser.TermContext = TermContext; 
