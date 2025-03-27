import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Helper function to roll a six-sided die.
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    // Initial dice values that are not the same
    const [left, setLeft] = useState<number>(1);
    const [right, setRight] = useState<number>(2);

    // Function to render the game result
    function renderResult(): string {
        if (left === right) {
            return left === 1 ? "Lose" : "Win";
        }
        return "";
    }

    return (
        <div>
            <span data-testid="left-die">{left}</span>
            <span data-testid="right-die">{right}</span>
            <div>
                <Button
                    onClick={() => {
                        setLeft(d6());
                    }}
                >
                    Roll Left
                </Button>
                <Button
                    onClick={() => {
                        setRight(d6());
                    }}
                >
                    Roll Right
                </Button>
            </div>
            <div>{renderResult()}</div>
        </div>
    );
}
