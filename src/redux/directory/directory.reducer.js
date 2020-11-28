const INITIAL_STATE = {
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

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;