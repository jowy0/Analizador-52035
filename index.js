import javasLexer from "./generated/javasLexer.js";
import javasParser from "./generated/javasParser.js";
import { CustomjavasVisitor } from "./CustomjavasVisitor.js";
import antlr4 from "antlr4";
import { CharStreams, CommonTokenStream } from "antlr4";
import fs from "fs";
import readline from "readline";
import { Token } from "antlr4";

async function main() {
    let input;

    try {
        input = fs.readFileSync("input.txt", "utf8");
    } catch (err) {
        input = await leerCadena();
        console.log(input);
    }

    const inputStream = CharStreams.fromString(input);
    const lexer = new javasLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new javasParser(tokenStream);
    const tree = parser.program();

    if (parser._syntaxErrors > 0) {
        console.error("❌ Se encontraron errores de sintaxis.");
        return;
    }

    console.log("✅ Entrada válida.\n");

    // 🌲 Árbol de derivación
    const cadena_tree = tree.toStringTree(parser.ruleNames);
    console.log("🌲 Árbol de derivación:");
    console.log(cadena_tree + "\n");

    // 📄 Tabla de Tokens
    console.log("📄 Tabla de Tokens:");
    for (const token of tokenStream.tokens) {
        if (token.type !== Token.EOF) {
            const tokenName = javasLexer.symbolicNames[token.type];
            console.log(`Lexema: "${token.text}"\t→ Token: ${tokenName}`);
        }
    }

    // 🧠 Interpretación
    console.log("\n🧠 Resultado de la interpretación:");
    const visitor = new CustomjavasVisitor();
    visitor.visit(tree);
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();