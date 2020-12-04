const phones = [
    {
        id: 1,
        name: 'iphone',
        couleur: 'rouge',
        marque: 'apple'
    },
    {
        id: 2,
        name: 'iphone',
        couleur: 'vert',
        marque: 'apple'
    },
    {
        id: 3,
        name: 'iphone',
        couleur: 'bleu',
        marque: 'apple'
    }
];

phones.forEach((phone) => {
    console.log(phone.marque);
});
