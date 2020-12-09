const INITIAL_STATE = {
    sections: [
        {
            title: 'Bags',
            imageUrl: 'items/bags.jpg',
            id: 1,
            linkUrl: 'shop/bags'
        },
        {
            title: 'Inuka',
            imageUrl: 'items/inuka.png',
            id: 2,
            linkUrl: 'shop/inuka'
        },
        {
            title: 'Food',
            imageUrl: 'items/food.jpg',
            id: 3,
            linkUrl: 'shop/food'
        },
        {
            title: 'Health',
            imageUrl: 'items/health.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/health'
        },
        {
            title: 'Cosmetics',
            imageUrl: 'items/cosmetics.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/cosmetics'
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