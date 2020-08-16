import React from 'react';
import Collectionsoverview from './../../components/collections-overview/collections-overview.components';
import {Route} from 'react-router-dom';
import Collection from './../collection/collection.components';
import {connect} from 'react-redux';
import Withspinner from './../../components/with-spinner/with-spinner.components';
import {createStructuredSelector} from 'reselect';
import {selectFetching} from './../../redux/shop/shop.select';
import {fetchCollectionStart} from './../../redux/shop/shop.action';


const CollectionOverviewWithSpinner = Withspinner(Collectionsoverview);
const CollectionWithSpinner = Withspinner(Collection);

class Shop extends React.Component{
       
    componentDidMount(){
        const {FetchData} = this.props
        FetchData();
    }
    render(){
        const {match,isFetching} = this.props;   
        
        return (
            <div className='shop-page'>            
                <Route exact path={`${match.path}`} render={(props) => {
                    return <CollectionOverviewWithSpinner isLoading={isFetching} {...props}/>
                }}/>
                <Route path={`${match.path}/:collectionId`} render = {(props) => {
                    return <CollectionWithSpinner isLoading={isFetching} {...props} />   
                }} />
            </div>  
        )
    }

} 
   
const matchStateToProps = createStructuredSelector({
    isFetching:selectFetching
})        
             
const matchDispatchToProps = dispatch => ({
    FetchData: () => dispatch(fetchCollectionStart())   
});           
     
       
export default connect(matchStateToProps,matchDispatchToProps)(Shop);     