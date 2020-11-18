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
                    id: 1
                },
                {
                    title: 'Inuka',
                    imageUrl: 'items/item1.jpg',
                    id: 2
                },
                {
                    title: 'Bags',
                    imageUrl: 'items/item1.jpg',
                    id: 3
                },
                {
                    title: 'Health',
                    imageUrl: 'items/item1.jpg',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'Cosmetics',
                    imageUrl: 'items/item1.jpg',
                    size: 'large',
                    id: 5
                },

            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;