import { getGifs } from "../helpers/getGifs";

export default function GifGrid({ category }) {
    
    getGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            <p>Hola</p>
        </>
    )
}
