import { useState, forwardRef } from 'react'
import images from '~/assets/images'

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [no_img, setno_img] = useState('')

    const handleError = () => {
        setno_img(images.noImage)
    }

    return <img ref={ref} src={no_img || src} alt={alt} {...props} onError={handleError} />
})

export default Image
