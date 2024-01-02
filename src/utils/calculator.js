export const handleInputChange = (e, setInput) => {
    const inputValue = e.target.value.replace(/[^0-9+\-*/().]/g, "");
    setInput(inputValue);
};

export const handleButtonClick = (value, input, setInput) => {
    const operators = ["/", "+", "-", "*"];
    if (operators.includes(value)) {
        if (input && !operators.includes(input.split("")[input.length - 1])) {
            setInput(prevInput => prevInput + value);
        }
    }
    else if (value === "()") {
        const openParenthesisCount = (input.match(/\(/g) || []).length;
        const closeParenthesisCount = (input.match(/\)/g) || []).length;

        if (openParenthesisCount > closeParenthesisCount) setInput((prevInput) => prevInput + ")");
        else setInput((prevInput) => prevInput + "(");
    }
    else if (value === "+/-") {
        const lastChar = input.slice(-1);

        if (!lastChar || operators.includes(lastChar)) setInput((prevInput) => prevInput + "(-");
        else {
            const lastNumberMatch = input.match(/(-?\d+)$/);
            const lastNumber = lastNumberMatch ? lastNumberMatch[0] : "";
            const restInput = input.slice(0, -lastNumber.length);

            setInput((prevInput) => restInput + `(-${lastNumber})`);
        }
    } 
    else if (value === ".") {
        const lastChar = input.slice(-1);

        const lastNumberMatch = input.match(/(-?\d*\.?\d+)$/);
        const hasDot = lastNumberMatch && lastNumberMatch[0].includes(".");

        if (!lastChar || operators.includes(lastChar) || hasDot) return;
        
        setInput((prevInput) => prevInput + value);
    }
    else if (value === "%") {
        const lastNumberMatch = input.match(/(-?\d*\.?\d+)$/);
        const lastNumber = lastNumberMatch ? lastNumberMatch[0] : "";

        if (lastNumber) {
            const restInput = input.slice(0, -lastNumber.length);
            setInput((prevInput) => restInput + `(${lastNumber}/100)`);
        }
    }
    else setInput(prevInput => prevInput + value);
}

export const handleResultChange = (input, setInput, result, setResult) => {
    if (!result) {
        try {
            const calcResult = eval(input);
            setResult(calcResult.toString());
        }
        catch (e) {
            setResult("Error");
        }
    }
    else {
        setInput(result);
        setResult("");
    }
}

export const handleDelete = (setInput, setResult) => {
    setInput("");
    setResult("");
}
