<template>
    <main>

        <div class="trailer is_overlay">
            <video 
                class="video" 
                width="100%" height="auto" 
                autoplay="autoplay" 
                loop="loop">
                    <source src="video/background-video.mp4"></source>
                    <!-- <source src="book.webm" type="video/webm"></source> -->
            </video>
        </div>

        <div class="wrapper">
            <div class="home-content">
                <h1 v-html="tagline"></h1>
                <router-link
                    tag="button"
                    class="btn btn__long"
                    :to="{ name: 'iMain' }">
                        <span>Go to catalog</span> 
                        <i class="fas fa-long-arrow-alt-right"></i>
                </router-link>
            </div>
        </div>

    </main>
</template>

<script>
    export default ({
        data() {
            return {
                tagline: `The first and only store where you can buy a dinosaur!`
            }
        }
    })
</script>

<style scoped>
h1 {
    color: antiquewhite;
    font-family: 'Rock Salt', cursive;
    font-size: 23px;
    font-weight: 400;
    color: #e50000;
    text-align: center;
}
.is_overlay { 
    display: block; 
    width: 100%; 
    height: 100%; 
}

.trailer {
	position: fixed;
	top: 0; right: 0; bottom: 0; left: 0;
	overflow: hidden;
}

.video {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

@media (min-aspect-ratio: 16/9) {
    .video { height: 300%; top: -100%; }
}
@media (max-aspect-ratio: 16/9) {
    .video { width: 300%; left: -100%; }
}
 
@supports (object-fit: cover) {
    .video {
        top: 0; left: 0;
        width: 100%; height: 100%;
        object-fit: cover;
    }
}

.wrapper {
    position: relative;
}

.home-content {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center; 
    justify-content: center; 
    overflow: auto;  
    background: rgba(0, 0, 0, .4); 
}

.btn__long {
    margin: 0;
    color: antiquewhite;
    background: rgb(2,0,36);
    opacity: 0.7;
    background: linear-gradient(105deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(10,139,166,1) 66%);
    box-shadow: 0px 0px 8px 1px #010101 inset;
}

.btn__long:active {
    box-shadow: none;
}

.fa-long-arrow-alt-right {
    margin-left: 10px;
    font-size: 17px;
}
</style>
