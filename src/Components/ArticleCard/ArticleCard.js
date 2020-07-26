import React from 'react';
import './ArticleCard.scss';

class ArticleCard extends React.Component {
    render() {
        const style = this.props.horizontalOrientation ?
            { 'gridTemplateColumns': '1fr 3fr' } :
            { 'gridTemplateRows': 'auto' }

        const portraitStyle = this.props.horizontalOrientation ?
            { 'width': '25vw', 'height': 'auto'} :
            { 'width': '70%', 'height': 'auto', 'paddingBottom': '2em' }

        const textStyle = this.props.horizontalOrientation ?
            { 'paddingLeft': '1em', 'fontSize': '1.4vw' } :
            { 'paddingLeft': '0em', 'fontSize': '1em' }

        return (
            <div className='article-card-wrapper' style={style}>
                {this.props.image &&
                <img
                    src={this.props.image}
                    alt='portrait'
                    className='picture'
                    style={portraitStyle}
                />}
                <div
                    className={'article-wrapper' + (this.props.image ? '' : ' no-image')}
                    style={textStyle}
                >
                    <h1 className='article-title'>About Me</h1>
                    <hr className='horizontal-card-black-line'/>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ArticleCard;