export const Config: any = {
    'brandName': 'Oblivion',
    'brandUrl': '/',
    'brandIcon': '/public/img/logo.png',
    'logoShow': true,
    'brandShow': true,
    'list': [
        {type: 'link', text: 'About', sort: '1', url: '/' , disabled: false},
        {type: 'link', text: 'Example', sort: '3', url: '/' ,disabled: false},
        {type: 'link', text: 'Router', sort: '4', url: '/', disabled: false },
        {type: 'link', text: 'Special', sort: '5', url: '/', disabled: true },
        {
            type: 'dropdown',
            text: 'Dropdown',
            disabled: false,
            sort: '2',
            url: '/',
            dropdown: [
                {text: 'One', url: '/'},
                {text: 'two', url: '/'},
                {text: 'tree', url: '/'},
                {text: 'four', url: '/'},
            ]
        }
    ],
};