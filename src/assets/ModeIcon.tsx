const ModelIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 36 36'
            className={className}
        >
            <title>{'objects-line'}</title>
            <path
                d='M16.08 14.9a10.41 10.41 0 0 1 1.87-.71l-4-10.77a2 2 0 0 0-3.75 0L2 25.26A2 2 0 0 0 3.92 28h6.94a10 10 0 0 1-.52-2H3.92l8.14-21.88Z'
                className='clr-i-outline clr-i-outline-path-1'
            />
            <path
                d='M32 9H22a2 2 0 0 0-2 2v2.85h.69a10.51 10.51 0 0 1 1.31.05V11h10v10h-1.35a10.42 10.42 0 0 1 .45 2h.9a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2Z'
                className='clr-i-outline clr-i-outline-path-2'
            />
            <path
                d='M20.69 15.81a8.5 8.5 0 1 0 8.5 8.5 8.51 8.51 0 0 0-8.5-8.5Zm0 15a6.5 6.5 0 1 1 6.5-6.5 6.51 6.51 0 0 1-6.5 6.5Z'
                className='clr-i-outline clr-i-outline-path-3'
            />
            <path fill='none' d='M0 0h36v36H0z' />
        </svg>
    )
}

export default ModelIcon
