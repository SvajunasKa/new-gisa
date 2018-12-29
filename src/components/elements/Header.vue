<template>
    <header>
        <div class="container">
            <nav>
                <router-link class="logo" to="/"><img src="../../assets/images/logo.png"/></router-link>
                <ul class="nav-menu">
                    <li>
                        <router-link class="link" to="/sprendimai"> {{getAllData.menu[0]}}</router-link>
                    </li>
                    <li>
                        <router-link class="link" to="/apsvietimo_technika">{{getAllData.menu[1]}}</router-link>
                    </li>
                    <li>
                        <router-link class="link" to="/igarsinimo_technika">{{getAllData.menu[2]}}</router-link>
                    </li>
                    <li>
                        <router-link class="link" to="/atlikti_darbai">{{getAllData.menu[3]}}</router-link>
                    </li>
                    <li>
                        <router-link class="link" to="/musu_draugai">{{getAllData.menu[4]}}</router-link>
                    </li>
                    <li>
                        <a class="link" href="/#contact"  >{{getAllData.menu[5]}}</a>
                    </li>
                </ul>
                <div class="menu-btn" @click="showMenu">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                menuData: [],
                headerPosition: 0
            }
        },
        computed: {
            ...mapGetters([
                'getAllData'
            ])
        },
        mounted(){
                window.addEventListener('scroll', this.handleScroll);
        },
        methods:{
            showMenu(){
                let menu = document.querySelector(".nav-menu");
                let btn = document.querySelector(".menu-btn");
                menu.classList.toggle("show");
                btn.classList.toggle("change")
            },
            handleScroll() {
                    this.getPosition();
                    let header = document.querySelector("header");
                    if (this.headerPosition < 114){
                        header.classList.add('color');
                    }else {
                        header.classList.remove('color');
                    }
            },
            getPosition(){
                let header = document.getElementsByTagName("h1")[0];
                const box = header.getBoundingClientRect();
                this.headerPosition = box.y
            }

        }
    }
</script>

<style scoped lang="scss">
    .bar1, .bar2, .bar3 {
        width: 26px;
        height: 3px;
        background-color: $white;
        margin: 6px 0;
        transition: 0.4s;
    }
    .change .bar1 {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-8px, 5px);
    }

    .change .bar2 {opacity: 0;}

    .change .bar3 {
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-7px, -5px);
    }
    header {
        width: 100%;
        z-index: 9999;
        position: fixed;
        &.color{
            background-color: $gray;
        }
    }

    .logo {
        float: left;
        img {
            width: 100px;
        }
    }

    li {
        display: inline-block;
        padding: 10px 15px;
        &:hover {
            background-color: $gray;

        }
    }

    .link {
        text-decoration: none;
        text-transform: uppercase;
        font-size: 16px;
        font-family: $font;
    }

    nav {
        padding: 10px 0;
        display: flex;
        align-items: center;
        .nav-menu {
            display: flex;
            justify-content: space-around;
            width: 100%;
            padding-left: 0;
            margin: 0;
            a {
                color: $white;
            }
        }
        .menu-btn {
            display: none;
        }
    }

    @media screen and (max-width: $break-tablet) {
        nav {
            position: relative;
            .nav-menu {
                display: none;
                position: absolute;
                top: 61px;
                right: 0;
                width: auto;
                background: $gray;
                li {
                    display: block;
                    height: 40px;
                    text-align: right;
                    border-bottom: 1px solid $white;
                    &:last-of-type {
                        border-bottom: none;
                    }
                    a {
                        width: 100%;
                    }
                }
                &.show{
                    display: block;
                }
            }
            .menu-btn {
                display: block;
                position: absolute;
                right: 0;
                text-align: center;
                cursor: pointer;
                span {
                    padding: 10px 30px;
                    &:after {
                        display: inline-block;
                        margin-left: 10px;
                        width: 20px;
                        height: 10px;
                        content: "";
                        border-left: solid 10px transparent;
                        border-top: solid 10px #fff;
                        border-right: solid 10px transparent;
                    }
                }

            }
        }

    }

</style>
