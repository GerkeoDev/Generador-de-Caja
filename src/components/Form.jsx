import { useState } from "react"

export function Form () {
    const [size, setSize] = useState("")
    const [color, setColor] = useState("")
    const [colors, setColors] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        setColors([...colors, {color, size}])
        setColor("")
        setSize("")
    }
    const handleChangeColor = (e) => {
        setColor(e.target.value)
    }
    const handleChangeSize = (e) => {
        setSize(e.target.value)
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="color">Color </label>
                    <input type="text" name="color" onChange={handleChangeColor} value={color}/>
                </div>
                <div>
                    <label htmlFor="size">Size </label>
                    <input type="number" name="size" onChange={handleChangeSize} value={size}/>
                </div>
                <input type="submit" value="Add"/>
                <button onClick={() => console.log(colors)}>log</button>
            </form>
            <div className="cuadradosDeColores" style={{display: "flex", flexWrap: "wrap", marginTop: "20px"}}>
                {colors.map((c, index) => (
                    <div key={index} style={{backgroundColor: c.color, width: `${c.size}px`, height: `${c.size}px`, marginRight: "10px", marginTop: "10px"}}></div>
                ))}
            </div>
        </>
    )
}