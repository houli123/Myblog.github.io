//博客的json文件
const blogData = {
"data": [
{
    "bno": 1,
    "bcontent": "HTML，或超文本标记语言，是构成互联网基础的一种语言。它不仅定义了网页内容的含义和结构，还与CSS和JavaScript共同工作，创造出功能丰富且外观吸引的网页。通过使用各种HTML标签，开发者可以插入文本、图片、链接等多种元素，使网页成为信息共享和互动的平台。",
    "uname": "Jack",
    "bdate": "2024-05-10 08:15:00",
    "btitle": "Web基础: HTML的重要性"
},
{
    "bno": 2,
    "bcontent": "CSS，或层叠样式表，是用来控制网页的视觉外观的一个强大工具。通过CSS，开发者可以指定文本颜色、字体、间距、布局、响应式设计及更多元素的样式，使网页不仅功能全面，也视觉上更加吸引人。CSS的使用大大提升了网页设计的灵活性和创造性，使得每个网页都能有其独特的风貌。",
    "uname": "Jack",
    "bdate": "2024-05-11 09:30:00",
    "btitle": "设计魅力: CSS在现代网页设计中的角色"
},
{
    "bno": 3,
    "bcontent": "JavaScript是一种高级编程语言，让网页从静态文档变为了可以互动的应用。通过JavaScript，可以实现用户与网页的交互效果，如表单验证、动态内容加载、动画等。随着Node.js的出现，JavaScript更是超越了客户端，成为了全栈开发的语言，极大地扩展了其使用场景和影响力。",
    "uname": "Jack",
    "bdate": "2024-05-12 14:45:00",
    "btitle": "互动体验: JavaScript的力量"
},
{
    "bno": 4,
    "bcontent": "响应式网页设计是一种现代网页设计理念，目的是让网站能够自动适配各种屏幕尺寸和分辨率，保证无论在任何设备上都能提供优秀的用户体验。利用CSS媒体查询、灵活的网格布局、图片和布局的动态调整，响应式设计能够让网站布局在桌面、平板和手机等设备上都能完美展现。",
    "uname": "Jack",
    "bdate": "2024-05-13 16:00:00",
    "btitle": "适应性强: 探索响应式网页设计"
},
{
    "bno": 5,
    "bcontent": "近年来，随着前端技术的不断进步，各种JavaScript框架和库的出现极大地促进了Web应用的开发。React、Vue和Angular就是其中最受欢迎的几个例子，每个框架都有自己的特点和优势。例如，React以其简洁的设计和组件化的开发方式受到青睐，Vue以其轻量和易上手著称，Angular则是一个由谷歌维护的全能型框架，适合构建大型应用。这些框架都为现代Web应用的开发提供了强大的支持。",
    "uname": "Jack",
    "bdate": "2024-05-14 10:10:00",
    "btitle": "前端趋势: 现代Web框架解析"
},
{
    "bno": 6,
    "bcontent": "HTML不仅是网络世界的一砖一瓦，其发展历程几乎与互联网同步。从简单的文本标记，到多媒体和互动元素，HTML的演变反映了Web技术的壮大和多元化。",
    "uname": "root",
    "bdate": "2024-05-11 11:20:00",
    "btitle": "HTML: 回顾网络的基石"
},
{
    "bno": 7,
    "bcontent": "CSS的发展改变了网页的面貌。一开始的网站设计基本局限在文本和简单图像，但随着的CSS的出现，网站开始变得多彩且个性化。透过一行行的样式代码，每个网站都可以有属于自己的特色和氛围。",
    "uname": "root",
    "bdate": "2024-05-13 13:35:00",
    "btitle": "从简到繁: CSS带来的革新"
},
{
    "bno": 8,
    "bcontent": "JavaScript的出现让网页变得 “活”起来。以前的网站只能做到展示信息，而现在，利用JavaScript，网站可以实现诸多与用户的交互，比如弹出对话框、动态改变页面内容等。JavaScript为网站带来了更加丰富的用户体验。",
    "uname": "root",
    "bdate": "2024-05-14 15:50:00",
    "btitle": "探索动态: JavaScript的魅力"
},
{
    "bno": 9,
    "bcontent": "响应式设计是现代Web开发中的一个重要理念。随着移动设备使用的普及，如何保证网站在任何设备上所有看起来和使用起来都完美，已经变得越来越重要。响应式设计的应用可以让网站的布局、图片、文字等元素自动适应屏幕大小，从而提供优质的用户体验。",
    "uname": "root",
    "bdate": "2024-05-01 12:05:00",
    "btitle": "一致与自适应: 探讨响应式设计"
},
{
    "bno": 10,
    "bcontent": "随着JavaScript生态环境的丰富，React、Vue、Angular等前端框架的兴起，为开发者提供了更加高效、便捷的开发方案，且这些框架或库还在不断地被优化和更新，预计在未来的Web开发领域中，这种趋势还会继续。",
    "uname": "root",
    "bdate": "2024-05-07 17:15:00",
    "btitle": "框架新纪元: 现代Web开发趋势"
},
{
    "bno": 16,
    "bcontent": "Web开发日新月异，保持学习是程序员的不变真理。",
    "uname": "y",
    "bdate": "2024-05-02 09:20:00",
    "btitle": "编码哲学: 永恒的学习之路"
},
{
    "bno": 17,
    "bcontent": "虚拟现实正在改变我们的生活，它也正在重塑Web的未来。",
    "uname": "Jack",
    "bdate": "2024-05-05 10:30:00",
    "btitle": "虚拟新风潮: VR对Web的影响"
},
{
    "bno": 18,
    "bcontent": "数据科学不仅仅是一门科学，它是未来所有产品决策的基石。",
    "uname": "u",
    "bdate": "2024-05-08 11:40:00",
    "btitle": "数据洞察: 未来的决策导向"
},
{
    "bno": 19,
    "bcontent": "人工智能已经不再是科幻小说中的概念，它正成为现实。",
    "uname": "root",
    "bdate": "2024-05-11 12:50:00",
    "btitle": "AI时代: 人工智能的兴起与挑战"
},
{
    "bno": 20,
    "bcontent": "云计算为企业和开发者提供了无限的可能性和灵活性。",
    "uname": "j",
    "bdate": "2024-05-14 13:55:00",
    "btitle": "云端建筑: 云计算的力量"
},
{
    "bno": 25,
    "bcontent": "2",
    "uname": "root",
    "bdate": "2024-05-29 15:40:27",
    "btitle": "1"
}
]
};

document.addEventListener('DOMContentLoaded', function () {
    const bContainer = document.getElementById("blog-container");
    bContainer.innerHTML = ''; // 清空原本内容

    blogData.data.forEach(blog => {
        const bSegment = document.createElement("div");
        bSegment.className = "blog-segment";   
        bSegment.innerHTML = `
            <h2 class="blog-title">${blog.btitle}</h2>
            <p class="blog-author">作者：${blog.uname} - 发布时间：${blog.bdate}</p>
            <p class="blog-content" style="display: none;">${blog.bcontent}</p>
            <button class="read-more" onclick="more_content(this)">阅读更多</button>
            <button class="read-more" onclick="Comments(this)">评论</button>
        `;

        //评论内容
        const cContainer = document.createElement("div");
        cContainer.className = "comments-container";
        cContainer.style.display = "none"; // 在未点击评论按钮前，不显示
        const cContents = document.createElement("div");
        cContents.className = "comment-contents";

        const cInput = document.createElement("textarea");
        cInput.className = "comment-input";
        cInput.placeholder = "哎哟，不错哟，发条评论吧";

        const cBtn = document.createElement("button");
        cBtn.className = "comment-submit";
        cBtn.textContent = "发布";

        // 发布评论后
        cBtn.addEventListener('click', function() {
            const newComment = document.createElement("div");
            newComment.className = "new-comment";
            newComment.innerHTML = `
                <p>Jack：${cInput.value}</p>
            `;
            // 清空文本框并添加新评论到评论区
            cInput.value = '';
            cContents.appendChild(newComment);
        });
        //回车发布评论
        cInput.addEventListener("keydown", function(e) {
            if (e.keyCode === 13) {
                e.preventDefault(); 
                cBtn.click(); 
            }
        });

        cContainer.appendChild(cContents);
        cContainer.appendChild(cInput);
        cContainer.appendChild(cBtn);
        bSegment.appendChild(cContainer); 
        bContainer.appendChild(bSegment);

        // 按钮设计
        function more_content(button){
            var content = button.previousElementSibling;
            if(content.style.display === 'none') {
                content.style.display = 'block';
                button.textContent = '收起';
            } else {
                content.style.display = 'none';
                button.textContent = '阅读更多';
            }
        }
        window.more_content = more_content;
        // 评论按钮
        function Comments(button) {
            var cContainer = button.nextElementSibling.style;
            if(cContainer.display === 'none') {
                cContainer.display = 'block';
            } else {
                cContainer.display = 'none';
            }
        }
        window.Comments = Comments;
    });
});