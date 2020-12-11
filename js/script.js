var app = new Vue({
    el: '#root',
    data: {
        logo: 'img/dark-logo.png',
        // arrow: '<i class="fas fa-chevron-down"></i>',
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
        ]
    },
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