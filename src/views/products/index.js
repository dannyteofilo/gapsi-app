import React, { Component } from 'react';
import * as actions from './redux/actions';
import { connect } from 'react-redux';
import Header from 'components/header'
import Auth from 'support/Auth';
import MediaCard from 'components/card';


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.props.dispatch(actions.fetch());
        const { data } = this.props
        if (data) {
            const { products } = data;
            this.setState({ products });
        }
    }

    componentWillReceiveProps() {
        const { data } = this.props;
        if (data) {
            console.log('porps: ', data);
            const { visitorId } = data;
            if (visitorId !== this.state.visitorId) {
                const { products } = data;
                this.setState({ products });
            }
        }
    }

    onLogout() {
        console.log('logout: ');
        return Auth.logout() && this.props.history.replace("/auth/login");
    }

    numberToCurrency(price) {
        let formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        return formatter.format(price);
    }
    render() {
        const { products } = this.state;

        return (
            <div>
                <Header onClick={() => this.onLogout()}></Header>
                <div className='container'>
                    <div className='row flex-row  align-items-center'>
                        {
                            products.map((item) => {
                                return <div className='m-2 col-3' key={item.ID}><MediaCard description={item.DESCRIPTION} image={item.IMAGE} name={item.NAME} price={this.numberToCurrency(item.PRICE)} sku={item.SKU}></MediaCard></div>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = store => {
    const { products } = store;
    return {
        data: products ? products.data : [],
    };
};

export default connect(mapStateToProps)(Products);