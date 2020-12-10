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
            // var attivoSelezionato = this.arrayNav[indice].active;
            // attivoSelezionato = true;

            // this.arrayNav[indice].active = true;

            if (this.arrayNav[indice].active = false) {
                this.arrayNav[indice].active = true;
            } else {
                this.arrayNav[indice].active = false;
            }

            // if (attivoSelezionato == true) {
            //     this.active != attivoSelezionato = false
            // } else {
                
            // }
            // console.log(attivoSelezionato);
        }
    }
});