// <<<<---click event--->>>>
{
    // let css = document.querySelector("head link[data='themecss']")
    // const buttonTem = document.querySelector('.navigation ul li a .icon input');
    // buttonTem.addEventListener('click', function () {
    //     console.log(this.checked);

    //     if (this.checked) {
    //         css.setAttribute('href', 'themeDark.css')

    //     } else {
    //         css.setAttribute('href', 'themeLight.css')

    //     }
    // })

    window.addEventListener('load', function () {
        if (localStorage.getItem('themeDass')) {

            // ubah tombol tema (cek apa isi local storage nya dan ubah tombol)
            localStorage.getItem('themeDass') == 'style/themeDark.css' ? this.document.body.querySelector('.navigation ul #themebtn').setAttribute('checked', 'checked') : 'ok';

            // ubah css tema
            this.document.head.querySelector("head link[data='themecss']").setAttribute('href', localStorage.getItem('themeDass'))


        } else {
            // buat local storage
            localStorage.setItem('themeDass', 'style/themeLight.css')
        }

    })

    // <<<<----langsung---->>>>
    document.addEventListener('click', function (event) {
        // cek yang di pencet 
        // theme button
        if (event.target == this.body.querySelector('.navigation ul #themebtn')) {
            // cek apa yang akan terjadi
            if (event.target.checked) {
                localStorage.setItem('themeDass', 'style/themeDark.css')

                this.head.querySelector("head link[data='themecss']").setAttribute('href', localStorage.getItem('themeDass'))
                return;
            } else {
                localStorage.setItem('themeDass', 'style/themeLight.css')

                this.head.querySelector("head link[data='themecss']").setAttribute('href', localStorage.getItem('themeDass'))
                return;
            }
        } //navigasi button
        else if (event.target == this.body.querySelector('.main .topbar .toggle ion-icon[name="menu-outline"]') || event.target == this.body.querySelector('.main .topbar .toggle')) {
            this.body.querySelector('.countainer .navigation').classList.toggle('active');
            this.body.querySelector('.countainer .main').classList.toggle('active');
            return;
        }
    })



}
// ---------------------------------
// nav clik li event
{
    const list = document.querySelectorAll('.navigation li');

    function activelink() {
        list.forEach((item) => {
            item.classList.remove('hovered')
        });
        this.classList.add('hovered');
    }

    list.forEach((item) => {
        item.addEventListener('click', activelink)
    });
}