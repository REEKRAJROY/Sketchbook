import { useEffect, useRef } from "react";

const Board = () => {
    const canvasRef = useRef(null)//did not understand
    useEffect(() => {
        if (!canvasRef.current)
        return
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    //when mounting
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    }, [])//useEffect is just a hook not a lifecycle method
    return(
        <canvas ref={canvasRef}></canvas>

    )
}
export default Board;