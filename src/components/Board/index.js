import { MENU_ITEMS } from "@/constants";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionItemClick } from "@/slice/menuSlice";

const Board = () => {
    const canvasRef = useRef(null)//did not understand
    const dispatch = useDispatch()
    const shouldDraw = useRef(false)
    const {activeMenuItem, actionMenuItem} = useSelector((state) => state.menu)
    const {color, size} = useSelector((state) => state.toolbox[activeMenuItem])

    useEffect(() => {
        if (!canvasRef.current) return
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if(actionMenuItem === MENU_ITEMS.DOWNLOAD){
        const url = canvas.toDataURL()
        const anchor = document.createElement('a')
        anchor.href = url
        anchor.download = 'sketchbook.jpg'
        anchor.click()
        console.log(url)
    }
    dispatch(actionItemClick(null))
    }, [actionMenuItem, dispatch])

    //This hook is consumed after useLayoutEffect hook is consumed
    useEffect(() => {
        if (!canvasRef.current) return
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const changeConfig = () => {
        context.strokeStyle = color
        context.lineWidth = size
    }

    changeConfig()
    },[color,size])

    //this hook is used as there was an overlap between useEffect hooks. First this hook is called and consumed.
    useLayoutEffect(() => {
        if (!canvasRef.current) return
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    //when mounting
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const beginPath = (x, y) => {
        context.beginPath()
        context.moveTo(x, y)
    }

    const drawLine = (x, y) => {
        context.lineTo(x, y)
        context.stroke()
    }

    const handleMouseDown = (e) => {
        shouldDraw.current = true
        beginPath(e.clientX, e.clientY)
    }

    const handleMouseMove = (e) => {
        if(!shouldDraw.current) return
        drawLine(e.clientX, e.clientY)
    }
    
    const handleMouseUp = (e) => {
        shouldDraw.current = false
    }

    canvas.addEventListener('mousedown', handleMouseDown)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseup', handleMouseUp)

    return () => {
        canvas.removeEventListener('mousedown', handleMouseDown)
        canvas.removeEventListener('mousemove', handleMouseMove)
        canvas.removeEventListener('mouseup', handleMouseUp)
    }

    }, [])//useEffect is just a hook not a lifecycle method
    
    return(
        <canvas ref={canvasRef}></canvas>

    )
}
export default Board;