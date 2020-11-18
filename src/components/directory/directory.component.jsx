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
                    imageUrl: 'items/item1.jpg',
                    id: 1,
                    linkUrl: 'herbal-life'
                },
                {
                    title: 'Inuka',
                    imageUrl: 'items/item1.jpg',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'Bags',
                    imageUrl: 'items/item1.jpg',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'Health',
                    imageUrl: 'items/item1.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'Cosmetics',
                    imageUrl: 'items/item1.jpg',
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