var app = new Vue({
    el: '#root',
    data: {
        // dati per nav
        logo: 'img/dark-logo.png',
        arrayNav: [
            {
                active: false,
                key: 'Home',
                arrayKey: [
                    'home1'
                ]
            },
            {
                active: false,
                key: 'Pages',
                arrayKey: [
                    'Pages1'
                ]
            },
            {
                active: false,
                key: 'Courses',
                arrayKey: [
                    'Courses1'
                ]
            },
            {
                active: false,
                key: 'Features',
                arrayKey: [
                    'Features1'
                ]
            },            
            {
                active: false,
                key: 'Blog',
                arrayKey: [
                    'Blog1'
                ]
            },            
            {
                active: false,
                key: 'Shop',
                arrayKey: [
                    'Shop1'
                ]
            }
        ],
        // dati per footer
        address: {
            titolo: 'Address',
            arrayAddress: [
                '382 NE 191st # 87394 Miami, FL 33179-3899',
                '+1(305) 547-9909 (9am - 5pm EST, Monday - Friday)',
                'support@maxcoach.com',
            ]
        },
        explore: {
            titolo: 'Explore',
            arrayExplore: [
                { 
                    testo: 'Start here',
                    link: '#'
                },
                { 
                    testo: 'Success story',
                    link: '#'
                },
                { 
                    testo: 'Blog',
                    link: '#'
                },
                { 
                    testo: 'Courses',
                    link: '#'
                },
                { 
                    testo: 'Contact US',
                    link: '#'
                }
            ]
        },
        info: {
            titolo: 'Information',
            arrayInfo: [
                { 
                    testo: 'Membership',
                    link: '#'
                },
                { 
                    testo: 'Purchase guide',
                    link: '#'
                },
                { 
                    testo: 'Privacy policy',
                    link: '#'
                },
                { 
                    testo: 'Terms of services',
                    link: '#'
                }
            ]
        },
        insta: {
            titolo: 'Instagram',
            mail: '@maxcoach',
            arrayInsta: [
                {
                    url: 'img/120084500_197897808368764_8114555493043279565_n.jpg'
                },
                {
                    url: 'img/120012142_177596140500760_8623485824101406058_n.jpg'
                },
                {
                    url: 'img/120099363_364334431619755_7198812647386067017_n.jpg'
                }
            ]
        }
    },
    methods: {
        mostra(elementi, indice) {
            // condizione per espandere dropdown se la variabile active e' su true o false
            if (elementi.active == false) {
                elementi.active = true;
            } else {
                elementi.active = false;
            }
        }
    }
});