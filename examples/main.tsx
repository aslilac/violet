import React from "react";
import type { ComponentPropsWithoutRef } from "react";
import { type FC, useCallback, useState } from "react";
import ReactDOM from "react-dom";
import { is, $string } from "succulent";
import "tsconfig-paths/register";

import { Card, Row } from "./components";
import hi from "./hullo";

export interface AppProps extends ComponentPropsWithoutRef<"div"> {
	onIncrement?(count: number): void;
	required(): void;
	requiredThatTakesArgs(arg: unknown): void;
}

export function App(props: AppProps) {
	let [clicks, setClicks] = useState(0);

	let onClick = useCallback(
		() => setClicks((clicks) => clicks + 1),
		[],
	);

	return <div>
		<h1>This is my app!</h1>
		<p>The button below has been clicked {clicks} time(s).</p>
		<button onClick={onClick}>Click me!</button>
	</div>;
}

const x = 0;
let y = 1;

println(x + y)

async function getFriend(name: string): Promise<number> {
	return new Promise<number>((resolve, reject) => {
		Database.getFriend(name, (error, result) => {
			if (error) {
				reject(error);
				return;
			}
			resolve(result);
		});
	});
}

