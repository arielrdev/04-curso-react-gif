import { useEffect, useState } from "react";
import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export default function GifGrid({ category }) {
    const { images, isLoading } = useFetchGifs ( category );
    console.log({ isLoading});

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={image.id}
                            { ...image }
                            // title={image.title}
                            // ulr={image.title}
                        />
                    ))
                }
            </div>
        </>
    )
}
