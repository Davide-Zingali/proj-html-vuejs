var app = new Vue({
    el: '#root',
    data: {
        // dati per nav
        // elemento attivo creato per escludere dalla chiusura il dropdown che interessa lasciare aperto
        elementoAttivo: 0,
        logo: 'img/dark-logo.png',
        arrayNav: [
            {
                active: false,
                key: 'Home',
                arrayKey: [
                    'home 1',
                    'home 2',
                    'home 3',
                    'home 4',
                    'home 5'
                ]
            },
            {
                active: false,
                key: 'Pages',
                arrayKey: [
                    'Pages 1',
                    'Pages 2',
                    'Pages 3',
                    'Pages 4',
                    'Pages 5'
                ]
            },
            {
                active: false,
                key: 'Courses',
                arrayKey: [
                    'Courses 1',
                    'Courses 2',
                    'Courses 3',
                    'Courses 4',
                    'Courses 5'
                ]
            },
            {
                active: false,
                key: 'Features',
                arrayKey: [
                    'Features 1',
                    'Features 2',
                    'Features 3',
                    'Features 4',
                    'Features 5'
                ]
            },            
            {
                active: false,
                key: 'Blog',
                arrayKey: [
                    'Blog 1',
                    'Blog 2',
                    'Blog 3',
                    'Blog 4',
                    'Blog 5'
                ]
            },            
            {
                active: false,
                key: 'Shop',
                arrayKey: [
                    'Shop 1',
                    'Shop 2',
                    'Shop 3',
                    'Shop 4',
                    'Shop 5'
                ]
            }
        ],
        // dati per il carosello
        mostraCarosello1: true,
        mostraCarosello2: false,
        newSelect1: 'select',
        newSelect2: '',
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
            // elemento attivo creato per escludere dalla chiusura il dropdown che interessa lasciare aperto
            this.elementoAttivo = indice;
            console.log(indice);
            
            // condizione per espandere dropdown se la variabile active e' su true o false
            if (elementi.active == false) {
                elementi.active = true;
            } else {
                elementi.active = false;
            }
            // ciclo for che permette la chiusura di altri elementi aperti, evitando aperture contemporanee di dropdown
            this.arrayNav.forEach((element, index) => {
                if (indice !== index) {
                    this.arrayNav[index].active = false
                } 
            });
        },
        // chiusura del dropdown attivo cliccando sullo spazio dell'header
        chiudi() {
            this.arrayNav[this.elementoAttivo].active = false;
        },
        scroll() {
            window.scrollTo(0, 0);
        },
        // meglio inserire i pulsanti i nei data di vue sotto forma di array e far scorrere la classe in base all'array
        cambioCarosello1() {
            this.mostraCarosello1 = true;
            this.mostraCarosello2 = false;
            this.newSelect1 = 'select';
            this.newSelect2 = '';
        },
        cambioCarosello2() {
            this.mostraCarosello1 = false;
            this.mostraCarosello2 = true;
            this.newSelect1 = '';
            this.newSelect2 = 'select';
        }
    }
});