console.log(
    '%cbuild from PakePlus： https://github.com/Sjj1024/PakePlus',
    'color:orangered;font-weight:bolder'
);

// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a');
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    );
    console.log('origin', origin, isBaseTargetBlank);
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault();
        console.log('handle origin', origin);
        location.href = origin.href;
    } else {
        console.log('not handle origin', origin);
    }
};

document.addEventListener('click', hookClick, { capture: true });


// ✅ 新增：让 video 标签点击后进入全屏（支持 App 内浏览器）
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector("video");

    if (video) {
        console.log("绑定视频点击事件：支持全屏");

        video.addEventListener("click", () => {
            const el = document.documentElement;

            if (el.requestFullscreen) {
                el.requestFullscreen();
            } else if (el.webkitRequestFullscreen) {
                el.webkitRequestFullscreen();
            } else if (el.msRequestFullscreen) {
                el.msRequestFullscreen();
            } else {
                console.log("全屏 API 不支持");
            }
        });
    } else {
        console.log("未找到 video 元素");
    }
});
