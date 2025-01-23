import useIncrement from "../hooks/useIncrement";

const Counter2 = () => {
    const [count, increase] = useIncrement(2);
    console.log(count)
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={increase}>Add 2</button>
        </>
    )
}

export default Counter2;