import PropTypes from 'prop-types'

const ShopItemFunc = ({brand, title,description,descriptionFull,currency,price}) => {

    return (
        <div class="main-content">
            <h2>{brand}</h2>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <div class="description">
                {descriptionFull}
            </div>
            <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
            <div class="divider"></div>
            <div class="purchase-info">
                <div class="price">{currency} {price}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    )

}

ShopItemFunc.protoType = {
    brand: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    descriptionFull: PropTypes.string,
    currency: PropTypes.symbol,
    price: PropTypes.number
};

export default ShopItemFunc
