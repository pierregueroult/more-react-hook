import { UseDimension } from "../lib/more-react-hook";

export default function UseDimensionExemple() {

    const [width, height] = UseDimension();
    // ! it gives the width and the height of the window

    return <span>Size of the window : {width}px of width and {height}px of height</span>
}
