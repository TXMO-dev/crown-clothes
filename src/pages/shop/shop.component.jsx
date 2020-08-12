import React from 'react';
import Collectionsoverview from './../../components/collections-overview/collections-overview.components';
import {Route} from 'react-router-dom';
import Collection from './../collection/collection.components';
import {firestore,convertFromArrayObjectToListObject} from './../../firebase/firebase.utils';
import  {UPDATE_SHOP_INFO} from './../../redux/shop/shop.action';
import {connect} from 'react-redux';
import Withspinner from './../../components/with-spinner/with-spinner.components';

const CollectionOverviewWithSpinner = Withspinner(Collectionsoverview);
const CollectionWithSpinner = Withspinner(Collection);

class Shop extends React.Component{
    state = {
        loading:true
    }

    unsubscribeFromSnapshot = null;


    
    componentDidMount(){
        const {setShopDate} = this.props;
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        
            const list_info = convertFromArrayObjectToListObject(snapshot);
            setShopDate(list_info);
            this.setState({loading:false});
            
        })
    }
    render(){
        const {match} = this.props;   
        const {loading} = this.state;
        return (
            <div className='shop-page'>            
                <Route exact path={`${match.path}`} render={(props) => {
                    return <CollectionOverviewWithSpinner isLoading={loading} {...props}/>
                }}/>
                <Route path={`${match.path}/:collectionId`} render = {(props) => {
                    return <CollectionWithSpinner isLoading={loading} {...props} />
                }} />
            </div>  
        )
    }

} 
   
         
             
const matchDispatchToProps = dispatch => ({
    setShopDate:shop => dispatch(UPDATE_SHOP_INFO(shop))
});           
     
       
export default connect(null,matchDispatchToProps)(Shop);     