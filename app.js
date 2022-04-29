;(function(){
    'use strict'

    const get = (target) => {return document.querySelector(target)}

    const $body = get('body')
    const $nav = get('nav')

    var checkData;

    const getPage = () => {
        checkData = Number.parseInt(localStorage.getItem("check"))
        if (checkData === null) {
            localStorage.setItem("check", 0)
            $body.classList.remove('preload')        
        } 

        if(checkData === 0) {
            $body.classList.remove('preload')
        }

        if (checkData === 1) {
            $nav.classList.add('active')
        }
    
        $body.classList.add('active')        
        if ($body.classList.contains('active')) {
            $body.style.visibility = 'visible'
        }
        console.log(checkData)
    }

    const openToggle = () => {
        console.log(checkData)
        if (checkData === 0) {
            $nav.classList.add('active')
            checkData = 1
            localStorage.setItem("check", "1")
        } else if(checkData === 1){
            checkData = 0
            $nav.classList.remove('active')
            localStorage.setItem("check", "0")
            $body.classList.remove('preload')
        }
    }

    const init = () => {
        const $toggle = get('.toggle')
        window.addEventListener('DOMContentLoaded', () => {
            getPage()
        })
        $toggle.addEventListener('click', openToggle)

    }


    init()
})()