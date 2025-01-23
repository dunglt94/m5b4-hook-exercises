import useIncrement from "../hooks/useIncrement";

const Counter1 = () => {
    const [count, increase] = useIncrement(1);
    console.log(count)
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={increase}>Add 1</button>
        </>
    )
}

export default Counter1;