import styles from '../sass/components/infocard/InfoCard.module.scss';
import { useParams } from 'react-router-dom';
import { getBreweryInfo } from '../services';
import { useEffect, useState } from 'react';
import ImgComponent from './ImgComponent';
import Loader from "./Loader";
import DetailsCard from './DetailsCard';

function InfoCard() {
    let id = useParams();
    const [breweryInfo, setBreweryInfo] = useState();
    const [details, setDetails] = useState();

    //Function for Mapping brewery info
    const breweryInfoHandler = async () => {
        try {
            const res = await getBreweryInfo(id.id).then((res) => {
                return res.data;
            })
            setBreweryInfo(res);
            setDetails([
                { data: res.name, icon: '/images/name.png', placeholder: 'Name' },
                { data: res.brewery_type, icon: '/images/type.png', placeholder: 'Type' },
                { data: res.website_url, icon: '/images/website.png', placeholder: 'Website' },
                { data: res.phone, icon: '/images/phone.png', placeholder: 'Phone' },
                { data: res.street, icon: '/images/address.png', placeholder: 'Address' },
            ])
        } catch (error) {
            console.log('Error occured when fetching the data')
        }
    }

    useEffect(() => {
        console.log(details)
    }, [details])

    useEffect(() => {
        breweryInfoHandler();
    }, []);
    return (
        <div className={styles.brewDetails}>
            <h1>Brewery Details</h1>
            <div className={styles.infoCard}>
                {breweryInfo ? (
                    <>
                        <div className={styles.logo}>
                            <ImgComponent url={breweryInfo.website_url} alt={breweryInfo.name} />
                        </div>
                        <div className={styles.details}>
                            {
                                details?.map((item) => {
                                    return <DetailsCard data={item.data} icon={item.icon} placeholder={item.placeholder} />
                                })
                            }
                        </div>
                    </>
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    )
}

export default InfoCard;
