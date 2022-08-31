import BgImage from './assets/bg.jpg'
import { getBlogPosts } from './data'
import './style.css'
import './test/date/printDate'

const blogs = getBlogPosts()
const ul = document.createElement('ul')
blogs.forEach(blog => {
        const li = document.createElement('li')
        li.textContent = blog
        ul.appendChild(li)
    }
)
document.body.appendChild(ul)

const img = document.createElement('img')
img.src = BgImage
document.body.prepend(img, document.body.firstChild)

const h1 = document.createElement('h1')
h1.textContent = '博客列表'
document.body.prepend(h1)

