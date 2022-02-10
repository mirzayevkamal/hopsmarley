import { useState } from 'react';
import noImg from '../images/noImg.jpg'

const ImgComponent = ({url, alt}) =>{
    const [imgError, setImgError] = useState(false);

    //Check if brewery has a logo, if not (or if image returning error) show placeholder image
    const handleLogoUrl = (url) => {
        if (url === null) {
            return noImg;
        }
        else if (url?.includes('http')) {
            return `//logo.clearbit.com/${url.split('/')[2]}`
        } else {
            return `//logo.clearbit.com/${url}`;
        }
    }

    return (
        <img onError={() => setImgError(true)} src={!imgError ? handleLogoUrl(url) : noImg} alt={alt} />
    )
};

export default ImgComponent;