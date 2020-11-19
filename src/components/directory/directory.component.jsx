import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'Herbal Life',
                    imageUrl: 'items/herbal.png',
                    id: 1,
                    linkUrl: 'herbal-life'
                },
                {
                    title: 'Inuka',
                    imageUrl: 'items/inuka.png',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'Bags',
                    imageUrl: 'items/casual.jpg',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'Health',
                    imageUrl: 'items/health.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'Cosmetics',
                    imageUrl: 'items/cosmetics.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                },

            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={ id } { ...otherSectionProps } />
                    ))
                }
            </div>
        )
    }
}

export default Directory;