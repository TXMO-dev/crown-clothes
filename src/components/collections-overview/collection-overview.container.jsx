import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Withspinner from './../with-spinner/with-spinner.components';
import Collectionoverview from'./collections-overview.components';
import {selectShopItems} from './../../redux/shop/shop.select' 
import {compose} from 'redux';

const matchStateToProps = createStructuredSelector({
    isLoading:selectShopItems
})

const collectionOverviewContainer = compose(
    connect(matchStateToProps),
    Withspinner
)(Collectionoverview);

export default collectionOverviewContainer;    