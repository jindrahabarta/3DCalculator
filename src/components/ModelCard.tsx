import React from 'react'
import CrossIcon from '../assets/CrossIcon'
import ModelIcon from '../assets/ModeIcon'

const ModelCard = ({
    model,
    handleDelete,
}: {
    model: File
    handleDelete?: () => void
}) => {
    return (
        <div
            key={model.name}
            className='p-2 flex items-center gap-4 shadow-md bg-white hover:bg-gray-100 duration-200 w-fit rounded-xl'
        >
            <ModelIcon className='fill-gray-400 w-10'></ModelIcon>
            <div className='flex flex-col break-all'>
                {model.name.length > 45
                    ? model.name.slice(0, 45) + '...'
                    : model.name}
                <span className='text-gray-500 text-sm'>
                    {Math.floor(model.size / 100) / 10} kb
                </span>
            </div>

            <div className='p-1' onClick={handleDelete}>
                <CrossIcon className='w-6 fill-red-500 hover:fill-red-600 duration-200'></CrossIcon>
            </div>
        </div>
    )
}

export default ModelCard