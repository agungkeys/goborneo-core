window.addEventListener("app:mounted",(function(){var e=document.querySelector("#courses-carousel");e._swiper=new Swiper(e,{slidesPerView:"auto",spaceBetween:18});var t={series:[{data:[{x:"Analysis",y:[new Date("2019-02-27").getTime(),new Date("2019-03-04").getTime()],fillColor:"#008FFB"},{x:"Design",y:[new Date("2019-03-04").getTime(),new Date("2019-03-09").getTime()],fillColor:"#00E396"},{x:"Coding",y:[new Date("2019-03-07").getTime(),new Date("2019-03-10").getTime()],fillColor:"#775DD0"},{x:"Testing",y:[new Date("2019-03-08").getTime(),new Date("2019-03-12").getTime()],fillColor:"#FEB019"},{x:"Deployment",y:[new Date("2019-03-12").getTime(),new Date("2019-03-17").getTime()],fillColor:"#FF4560"}]}],chart:{type:"rangeBar",height:"200px",parentHeightOffset:0,toolbar:{show:!1}},grid:{padding:{top:-16,bottom:0}},plotOptions:{bar:{horizontal:!0,distributed:!0,dataLabels:{hideOverflowingLabels:!1}}},dataLabels:{enabled:!1},xaxis:{type:"datetime"},yaxis:{show:!1}},o=document.querySelector("#timeline-chart");setTimeout((function(){o._chart=new ApexCharts(o,t),o._chart.render()}));var r={placement:"bottom-end",modifiers:[{name:"offset",options:{offset:[0,4]}}]};new Popper("#timeline-menu",".popper-ref",".popper-root",r),new Popper("#group-lessons-menu",".popper-ref",".popper-root",r),new Popper("#completed-course-menu",".popper-ref",".popper-root",r)}),{once:!0});