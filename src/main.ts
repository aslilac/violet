export type ViProgram = {
	statements: ViStatement[];
};

export type ViStatement =
	| {
			kind: "assignment";
			mut: boolean;
			container: string;
			value: ViValue;
	  }
	| {
			kind: "import";
			source: string;
			specs: [];
	  };

export type ViImportSpec = {
	kind: "glob";
	target: string;
};

export type ViExecution = {
	scope: Record<string, ViValue>;
};

export type ViValue = {
	kind: "number";
	value: number;
};

const program: ViProgram = {
	statements: [
		{
			kind: "assignment",
			mut: false,
			container: "x",
			value: { kind: "number", value: 0 },
		},
		{
			kind: "assignment",
			mut: true,
			container: "y",
			value: { kind: "number", value: 1 },
		},
	],
};

function interpret(program: ViProgram) {
	const exec: ViExecution = {
		scope: {},
	};

	for (const statement of program.statements) {
		switch (statement.kind) {
			case "assignment":
				exec.scope[statement.container] = statement.value;
				break;
		}
	}

	console.log(exec);
}

interpret(program);
