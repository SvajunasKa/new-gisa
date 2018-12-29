<template>
    <footer>
        <ul class="copyright">
            <li><i class="fa fa-copyright" aria-hidden="true"></i><a title="gisa.lt"
                                                                     href="http://gisa.lt">GISA.LT</a></li>
        </ul>
    </footer>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style lang="scss" scoped>
    footer {
        background-color: #1d242a;
        text-align: center;
        height: 100px;
        width: 100%;
        bottom: 0;
        padding-top: 35px;
        li{
            list-style: none;
            a{
                color: $white;
            }
        }
        ul{
            padding-left: 0;
        }
    }
</style>