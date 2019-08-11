<template>
<div>
    <div class="block-404 glitch"></div>
    <div class="block-404__page">
            <h1 class="glitch__title">err404</h1>
            <p class="glitch__text">Page not found</p>
    </div>
</div>
</template>

<script>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Audiowide&display=swap');

.block-404 {
    filter: grayscale(40%);
}

.block-404,
.block-404__page
{
    background: url('../../public/images/rex404.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;

    overflow: hidden;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.block-404__page {
    background: url('../../public/images/cam.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
}

.glitch__title,
.glitch__text
{
    position: relative;
    color: black;
    font-family: 'Audiowide', cursive;
    font-size: 60px;
    padding-right: 10%;
    margin: 0;
}

.glitch__text { font-size: 29px }

.glitch__title::after, 
.glitch__title::before
{
    content: 'err404';
    font-family: 'Audiowide', cursive;
    position: absolute;
    top: 0;
}

.glitch__text::after,
.glitch__text::before
{
    content: 'Page not found';
    font-family: 'Audiowide', cursive;
    position: absolute;
    top: 0;
}

.glitch__title::before,
.glitch__text::before
{
    left: 2px;
    top: 4px;
    text-shadow: -3px 0 rgb(255, 0, 0);
    animation: glitch-before 2s linear 0s infinite alternate;
}

.glitch__title::after,
.glitch__text::after
{
    left: -2px;
    top: -4px;
    text-shadow: 2px 0 rgb(0, 255, 0);
    animation: glitch-after 2s linear 3s infinite alternate;
}

@keyframes glitch-before {
  0% {
    clip: rect(20px, 1000px, 32px, 0);
  }
  10% {
    clip: rect(55px, 1000px, 74px, 1px);
  }
  20% {
    clip: rect(13px, 1000px, 83px, 0);
  }
  30% {
    clip: rect(70px, 1000px, 48px, 2px);
  }
  40% {
    clip: rect(93px, 1000px, 38px, 0);
  }
  50% {
    clip: rect(48px, 1000px, 31px, 5px);
  }
  60% {
    clip: rect(77px, 1000px, 17px, 0);
  }
  70% {
    clip: rect(79px, 1000px, 94px, 1px);
  }
  80% {
    clip: rect(48px, 1000px, 84px, 0);
  }
  90% {
    clip: rect(23px, 1000px, 8px, 25px);
  }
  100% {
    clip: rect(95px, 1000px, 68px, 5px);
  }
}

@keyframes glitch-after {
  0% {
    clip: rect(163px, 1000px, 182px, 0);
  }
  2% {
    clip: rect(149px, 1000px, 182px, 0);
  }
  4% {
    clip: rect(115px, 1000px, 61px, 0);
  }
  6% {
    clip: rect(53px, 1000px, 130px, 0);
  }
  8% {
    clip: rect(29px, 1000px, 138px, 0);
  }
  10% {
    clip: rect(153px, 1000px, 61px, 0);
  }
  12% {
    clip: rect(34px, 1000px, 2px, 0);
  }
  14% {
    clip: rect(150px, 1000px, 102px, 0);
  }
  16% {
    clip: rect(23px, 1000px, 139px, 0);
  }
  18% {
    clip: rect(150px, 1000px, 152px, 0);
  }
  20% {
    clip: rect(158px, 1000px, 96px, 0);
  }
  22% {
    clip: rect(38px, 1000px, 140px, 0);
  }
  24% {
    clip: rect(98px, 1000px, 189px, 0);
  }
  26% {
    clip: rect(155px, 1000px, 114px, 0);
  }
  28% {
    clip: rect(200px, 1000px, 101px, 0);
  }
  30% {
    clip: rect(160px, 1000px, 9px, 0);
  }
  32% {
    clip: rect(23px, 1000px, 3px, 0);
  }
  34% {
    clip: rect(170px, 1000px, 102px, 0);
  }
  36% {
    clip: rect(110px, 1000px, 59px, 0);
  }
  38% {
    clip: rect(166px, 1000px, 68px, 0);
  }
  40% {
    clip: rect(6px, 1000px, 96px, 0);
  }
  42% {
    clip: rect(78px, 1000px, 137px, 0);
  }
  44% {
    clip: rect(184px, 1000px, 80px, 0);
  }
  46% {
    clip: rect(66px, 1000px, 128px, 0);
  }
  48% {
    clip: rect(3px, 1000px, 58px, 0);
  }
  50% {
    clip: rect(38px, 1000px, 162px, 0);
  }
  52% {
    clip: rect(95px, 1000px, 101px, 0);
  }
  54% {
    clip: rect(85px, 1000px, 89px, 0);
  }
  56% {
    clip: rect(183px, 1000px, 136px, 0);
  }
  58% {
    clip: rect(182px, 1000px, 91px, 0);
  }
  60% {
    clip: rect(175px, 1000px, 28px, 0);
  }
  62% {
    clip: rect(124px, 1000px, 17px, 0);
  }
  64% {
    clip: rect(24px, 1000px, 163px, 0);
  }
  66% {
    clip: rect(18px, 1000px, 127px, 0);
  }
  68% {
    clip: rect(189px, 1000px, 175px, 0);
  }
  70% {
    clip: rect(123px, 1000px, 143px, 0);
  }
  72% {
    clip: rect(98px, 1000px, 47px, 0);
  }
  74% {
    clip: rect(93px, 1000px, 54px, 0);
  }
  76% {
    clip: rect(166px, 1000px, 195px, 0);
  }
  78% {
    clip: rect(127px, 1000px, 165px, 0);
  }
  80% {
    clip: rect(158px, 1000px, 191px, 0);
  }
  82% {
    clip: rect(72px, 1000px, 2px, 0);
  }
  84% {
    clip: rect(177px, 1000px, 180px, 0);
  }
  86% {
    clip: rect(87px, 1000px, 4px, 0);
  }
  88% {
    clip: rect(79px, 1000px, 22px, 0);
  }
  90% {
    clip: rect(95px, 1000px, 195px, 0);
  }
  92% {
    clip: rect(178px, 1000px, 23px, 0);
  }
  94% {
    clip: rect(162px, 1000px, 9px, 0);
  }
  96% {
    clip: rect(62px, 1000px, 161px, 0);
  }
  98% {
    clip: rect(107px, 1000px, 61px, 0);
  }
  100% {
    clip: rect(17px, 1000px, 136px, 0);
  }
}
</style>