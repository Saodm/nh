// 获取文字元素
const flashText = document.querySelector('.flash-text');

// 设置频闪间隔（毫秒），数值越小频率越高
const interval = 100;

// 实现频闪效果
setInterval(() => {
    // 切换元素的透明度
    flashText.style.opacity = flashText.style.opacity === '0' ? '1' : '0';
}, interval);
