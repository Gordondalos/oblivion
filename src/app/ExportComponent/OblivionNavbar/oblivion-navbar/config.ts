/**
 * Конфиг файл навигационного меню
 * в данном контексте в списке имеются параметры обьектов списка
 * type - должен быть либо link либо dropdown - говорит какой элемент списка нужно вывести
 * text - текст отображаемый на ссылке
 * url - адрес куда должен ссылаться элемент списка
 * disabled - параметр определяющий доступен или отключен ли элемент списка
 * sort - порядок сортировки элемента списка
 * @type {{brandName: string; brandUrl: string; brandIcon: string; logoShow: boolean; brandShow: boolean; list: [{type: string; text: string; sort: string; url: string; disabled: boolean},{type: string; text: string; sort: string; url: string; disabled: boolean},{type: string; text: string; sort: string; url: string; disabled: boolean},{type: string; text: string; sort: string; url: string; disabled: boolean},{type: string; text: string; disabled: boolean; sort: string; url: string; dropdown: [{text: string; url: string},{text: string; url: string},{text: string; url: string},{text: string; url: string}]}]}}
 */

export const Config: any = {
    'brandName': 'Oblivion', // название бренда
    'brandUrl': '/', // url куда должен ссылаться
    'brandIcon': '/public/img/logo.png', // адрес кортинки
    'logoShow': true, // отображать лого или нет
    'brandShow': true, // отображать название или нет
    'list': [ // список элементов меню
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