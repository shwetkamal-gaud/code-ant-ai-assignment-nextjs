import React from 'react'

const HomeIcon = ({ color }: { color: string }) => {
    return (
        <svg width="21" height="21" viewBox="0 0 21 18" fill='none' xmlns="http://www.w3.org/2000/svg">
            <path fill={color} d="M19.9453 8.07275C20.2969 8.38916 20.332 8.9165 20.0508 9.26807C19.7344 9.61963 19.207 9.65479 18.8555 9.37354L18.0117 8.63525V15.1743C18.0117 16.7563 16.7461 17.9868 15.1992 17.9868H5.07422C3.49219 17.9868 2.26172 16.7563 2.26172 15.1743V8.63525L1.38281 9.37354C1.03125 9.65479 0.503906 9.61963 0.1875 9.26807C-0.09375 8.9165 -0.0585938 8.38916 0.292969 8.07275L9.57422 0.197754C9.89062 -0.0483398 10.3477 -0.0483398 10.6641 0.197754L19.9453 8.07275ZM5.07422 16.2993H6.76172V10.9556C6.76172 10.1821 7.35938 9.54932 8.16797 9.54932H12.1055C12.8789 9.54932 13.5117 10.1821 13.5117 10.9556V16.2993H15.1992C15.7969 16.2993 16.3242 15.8071 16.3242 15.1743V7.19385L10.1367 1.95557L3.94922 7.19385V15.1743C3.94922 15.8071 4.44141 16.2993 5.07422 16.2993ZM8.44922 16.2993H11.8242V11.2368H8.44922V16.2993Z"  />
        </svg>
    )
}

export default HomeIcon