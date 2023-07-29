import React from 'react';
import TextPlaceholder from '../TextPlaceholder';
import { formatCurrency } from '../../util/Price';
import './Product.style.scss';

const Product = (props) => {
    const renderProductImg = () => {
        const { product: { image_url, name }, isLoading } = props;

        if (isLoading) {
            return (
                <div className='Product-ImageBlock'>
                    <div
                        className={ isLoading ? 'Image_placeholder' : 'Image' }
                        src={ image_url || '' }
                        alt={ name }
                        title={ name }
                        loading="lazy"
                    />
                </div>
            );
        }

        return (
            <div className='Product-ImageBlock'>
                <img
                    className={ isLoading ? 'Image_placeholder' : 'Image' }
                    src={ image_url || '' }
                    alt={ name }
                    title={ name }
                    loading="lazy"
                />
            </div>
        );
    }

    const renderProductName = () => {
        const { product: { name }, isLoading } = props;

        return (
            <div className='Product-NameBlock content'>
                {
                    isLoading ?
                    <TextPlaceholder length='medium' /> :
                    <p className='productDetail'>{ name }</p>
                }
            </div>
        );
    }

    const rednerProductPrice = () => {
        const { product: { price }, isLoading } = props;

        return (
            <div className='Product-PriceBlock content'>
                {
                    isLoading ?
                    <TextPlaceholder length='medium' /> :
                    <p className='productDetail'>{ formatCurrency(price) }</p>
                }
            </div>
        );
    }

    return (
        <>
            <div className='Product'>
                { renderProductImg() }
                { renderProductName() }
                { rednerProductPrice() }
            </div>
        </>
    );
};

export default Product;