;(function(){
    'use strict'

    const get = (target) => {return document.querySelector(target)}

    const $body = get('body')
    const $nav = get('nav')

    let checkData;

    const getPage = () => {
        checkData = localStorage.getItem("check")
        if (checkData == null) {
            localStorage.setItem("check", "preload")
        } 

        if(checkData === "preload") {
            $body.classList.remove('preload')
        }

        if (checkData === "active") {
            $nav.classList.add('active')
        }
    
        $body.classList.add('active')        
        if ($body.classList.contains('active')) {
            $body.style.visibility = 'visible'
        }
    }

    const openToggle = () => {
        if (checkData === "preload") {
            $nav.classList.add('active')
            checkData = "active"
            localStorage.setItem("check", checkData)
        } else if(checkData === "active"){
            $body.classList.remove('preload')
            checkData = "preload"
            $nav.classList.remove('active')
            localStorage.setItem("check", checkData)
        }
    }

    const init = () => {
        const $toggle = get('.toggle')
        window.onload = () => { getPage()}
        $toggle.addEventListener('click', openToggle)
    }
    init()
})()