import javasVisitor from "./generated/javasVisitor.js";

export class CustomjavasVisitor extends javasVisitor {
    constructor() {
        super();
        this.memory = {}; // Tabla de símbolos para variables
    }

    visitProgram(ctx) {
        return ctx.statement().map(stmt => this.visit(stmt));
    }

    visitAssignmentStatement(ctx) {
        const id = ctx.Identifier().getText();
        const value = this.visit(ctx.expression());
        this.memory[id] = value;
        return null;
    }

    visitConsoleStatement(ctx) {
        const value = this.visit(ctx.expression());
        console.log(value);
        return null;
    }

    visitExpression(ctx) {
        let result = this.visit(ctx.term(0));
        for (let i = 1; i < ctx.term().length; i++) {
            const nextTerm = this.visit(ctx.term(i));
            result += nextTerm;
        }
        return result;
    }

    visitTerm(ctx) {
        if (ctx.Identifier()) {
            const id = ctx.Identifier().getText();
            return this.memory[id] ?? 0; // Devuelve 0 si no está definido
        } else if (ctx.Number()) {
            return parseInt(ctx.Number().getText());
        } else if (ctx.StringLiteral()) {
            const str = ctx.StringLiteral().getText();
            return str.slice(1, -1); // Quita comillas dobles
        } else if (ctx.expression()) {
            return this.visit(ctx.expression());
        }
        return null;
    }
}

