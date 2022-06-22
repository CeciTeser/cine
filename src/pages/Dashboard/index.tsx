import { FC } from 'react';

import { Layout } from '../../components';
import { Footer } from '../../components/Common';
import { Header } from '../../components/Common/Header';
import { ItemsList } from '../../components/Layout';
import { StarRatingFilter } from '../../components/StarRaitingFilter';


import { useItems } from '../../hooks';



const Dashboard:FC =()=>{

    const { data } = useItems()

    return (  
        <Layout page ='Dashboard'>
            <Header/>
            <StarRatingFilter stars={5}/>
            <ItemsList items={data.results}/>
            <Footer/>
        </Layout>
    )
}
export default (Dashboard);