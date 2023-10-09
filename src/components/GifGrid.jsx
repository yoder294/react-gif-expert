import React from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <React.Fragment>
            <h3>{category}</h3>
            
            { isLoading && <h2>Cargando ....</h2> }
            { !isLoading &&
                <div className="card-grid">
                    {
                        images.map(( image ) => (
                            <GifItem
                                key={image.id}
                                {...image } // Expande todas la propiedades
                            />
                        ))
                    }
                </div>
            }
        </React.Fragment>
    
    );
};
