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
                    'home1',
                    'home2',
                    'home3',
                    'home4',
                    'home5'
                ]
            },
            {
                active: false,
                key: 'Pages',
                arrayKey: [
                    'Pages1',
                    'Pages2',
                    'Pages3',
                    'Pages4',
                    'Pages5'
                ]
            },
            {
                active: false,
                key: 'Courses',
                arrayKey: [
                    'Courses1',
                    'Courses2',
                    'Courses3',
                    'Courses4',
                    'Courses5'
                ]
            },
            {
                active: false,
                key: 'Features',
                arrayKey: [
                    'Features1',
                    'Features2',
                    'Features3',
                    'Features4',
                    'Features5'
                ]
            },            
            {
                active: false,
                key: 'Blog',
                arrayKey: [
                    'Blog1',
                    'Blog2',
                    'Blog3',
                    'Blog4',
                    'Blog5'
                ]
            },            
            {
                active: false,
                key: 'Shop',
                arrayKey: [
                    'Shop1',
                    'Shop2',
                    'Shop3',
                    'Shop4',
                    'Shop5'
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

        // Instagram: 
        // {
        //     titolo: 'Instagram'
        // }
        // [
        //     { 
        //         testo: 'Membership',
        //         link: '#'
        //     },
        //     { 
        //         testo: 'Purchase guide',
        //         link: '#'
        //     },
        //     { 
        //         testo: 'Privacy policy',
        //         link: '#'
        //     },
        //     { 
        //         testo: 'Terms of services',
        //         link: '#'
        //     }
        // ],




    //     arrayFooter: [
    //         {
    //             key: 'Andress',
    //             arrayKey: [
    //                 '382 NE 191st # 87394 Miami, FL 33179-3899',
    //                 '+1(305) 547-9909 (9am - 5pm EST, Monday - Friday)',
    //                 'support@maxcoach.com',
    //                 'v-html="<i class="fab fa-facebook-square"></i>"'
    //                 // '<i class="fab fa-facebook-square"></i>   <i class="fab fa-twitter"></i>   <i class="fab fa-instagram"></i>   <i class="fab fa-linkedin"></i>'
    //             ]
    //         },
    //         {
    //             key: 'Explore',
    //             arrayKey: [
    //                 'Start here',
    //                 'Success story',
    //                 'Blog',
    //                 'Courses',
    //                 'Contact US'
    //             ]
    //         },
    //         {
    //             key: 'Information',
    //             arrayKey: [
    //                 'Membership',
    //                 'Purchase guide',
    //                 'Privacy policy',
    //                 'Terms of services'
    //             ]
    //         },
    //         {
    //             key: 'Instagram @maxcoach',
    //             arrayKey: [
    //                 'img/120084500_197897808368764_8114555493043279565_n.jpg',
    //                 'Image',
    //                 'Image',
    //             ]

    //         }
    //     ]
    // },
    methods: {
        mostra(elementi, indice) {
            // condizione per espandere dropdown se la variabile active e' su true o false
            if (elementi.active == false) {
                elementi.active = true;
            } else {
                elementi.active = false;
            }
            // elemento dell'arrey che viene attivato
            this.arrayNav[indice]
            console.log(this.arrayNav[indice]);

            this.arrayNav.forEach(element => {
                console.log(this.arrayNav[indice]);
                if (this.arrayNav[indice] != Element) {
                    this.active = true
                } else {
                    false
                }
            });
        }
    }
});