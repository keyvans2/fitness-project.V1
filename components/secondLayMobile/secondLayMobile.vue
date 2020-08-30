<template>
    <div class="secondLayMobile">
        <ul class="pr-2">
            <li class="text-right">
                <i class="fas fa-caret-left "></i>
                <a href="#" class="text-right">
                    تست
                </a>
            </li>
            <li class="text-right">
                <i class="fas fa-caret-left"></i>
                <a href="#" class="text-right">
                    تست
                </a>
            </li>
            <li class="text-right">
                <i class="fas fa-caret-left"></i>
                <a href="#" class="text-right">
                    تست
                </a>
            </li>
            <li class="text-right">
                <i class="fas fa-caret-left"></i>
                <a href="#" class="text-right">
                    تست
                </a>
            </li>
            <li class="text-right">
                <i class="fas fa-caret-left"></i>
                <a href="#" class="text-right">
                    تست
                </a>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        props: {},
    };
</script>
<style lang="less">
    .secondLayMobile {
        width: 100%;
        /*background-color: #ffffff;*/
        max-height: 0;
        /*opacity: 0;*/
        transition: max-height 0.400s ease-in;
        overflow: hidden;

        /*padding-top: 10px;*/
        /*border-top: 1px solid #ffffff;*/

        ul {

            li {
                list-style-type: none;
                padding-bottom: 5px;

                i {
                    padding-left: 5px!important;
                }

                a {
                    font-family: font1;
                }

            }
        }
    }
</style>
