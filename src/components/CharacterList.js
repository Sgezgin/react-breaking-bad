import React from 'react'
import Loading from '../utils/loadingSpinner/Loading'



function CharacterList({ items, isLoading }) {

    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-4">
                    {isLoading ? (<Loading />) : (
                        items.map(item => (
                            getCaracterCard(item)
                        ))
                    )}
                </div>
            </div>
        </>
    )
}


const getCaracterCard = (item) => {
    return (
        <div key={item.char_id} >
            <h1>{item.name}</h1>
            <img className="h-48 w-52" src={item.img} />
        </div>
    )
}

export default CharacterList
